/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import chain from 'lodash/chain';
import startCase from 'lodash/startCase';

import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';

import translate from '../helpers/translate';

/**
 * Exception filter to handle all exceptions in the application.
 */
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  /**
   * Method to handle exceptions.
   * @param {Error} error - The caught exception.
   * @param {ArgumentsHost} host - The arguments host object.
   */
  catch(error: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    console.log(error);

    if (error instanceof HttpException) {
      const status = error.getStatus();
      const responseBody = error.getResponse();
      response.status(status).json(responseBody);
    } else {
      console.log(error.name);
      switch (error.name) {
        case 'SequelizeDatabaseError':
          response.status(422).json({
            message: translate('errors', 'default'),
          });
          break;
        case 'SequelizeValidationError':
          response.status(422).json({
            message: translate('validations', 'default'),
            errors: chain((error as any).errors)
              .keyBy('path')
              .mapValues('message')
              .value(),
          });
          break;
        case 'AppValidationError':
          response.status((error as any).code).json({
            message: (error as any).message,
          });
          break;
        case 'SequelizeUniqueConstraintError': {
          let message;
          if ((error as any).errors?.length) {
            const columnName = (error as any).errors[0]?.path?.split('.').pop();
            message = translate('validations', 'alreadyExists', {
              ':attribute': startCase(columnName),
            });
            message = message ?? (error as any).errors[0]?.message;
          }
          response.status(409).json({
            message,
          });
          break;
        }
        case 'SequelizeForeignKeyConstraintError': {
          let message;
          const columnName = (error as any).fields[0];
          message = translate('validations', 'valid', {
            ':attribute': startCase(columnName),
          });
          message = message ?? (error as any).message;
          response.status(409).json({
            message,
          });
          break;
        }
        case 'AppValidationErrorWithData': {
          response.status((error as any).code).json({
            message: (error as any).message,
            data: (error as any).data,
          });
          break;
        }
        case 'UnauthorizedException': {
          response.status(401).json({
            message: (error as any).message,
          });
          break;
        }
        case 'ClientNotFound': {
          response.status(401).json({
            message: 'ClientNotFound',
          });
          break;
        }
        case 'ForbiddenException': {
          response.status(403).json({
            message: (error as any).message,
          });
          break;
        }
        default:
          response.status(500).json({
            message: translate('errors', 'default'),
          });
      }
    }
  }
}

/**
 * Higher-order function to handle errors in controller methods.
 * @param {Function} controllerMethod - The original controller method.
 * @returns {Function} - The wrapped function with error handling.
 */
export const withErrorHandler = (
  controllerMethod: (request: any, response: any) => Promise<void>,
) => {
  return async (request: any, response: any, next: (err?: any) => void) => {
    try {
      // Call the original controller method
      await controllerMethod(request, response);
    } catch (error) {
      const err = error?.response ? error.response : error;
      // Forward the error to the error handling middleware
      return next(err);
    }
  };
};
