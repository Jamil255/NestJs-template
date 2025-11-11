/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Reflector } from '@nestjs/core';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

import { Role } from '../common/role.enum';

import { ROLES_KEY } from '../decorators/role-decorators';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const { authInfo } = context.switchToHttp().getRequest();

    /* Check if user has at least one required role */
    const hasRole = requiredRoles.some((role) =>
      authInfo?.scopes.includes(role),
    );

    if (!hasRole) {
      throw new ForbiddenException(
        'Access denied: You do not have the necessary role.',
      );
    }
    return true;
  }
}
