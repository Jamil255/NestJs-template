/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import AppValidationError from 'src/exceptions/AppValidatorError';

@Injectable()
export class ListService {
  constructor() {}
  list() {
    try {
      return { message: 'helloo' };
    } catch (error) {
      throw new AppValidationError(error?.message, error?.code);
    }
  }
}
