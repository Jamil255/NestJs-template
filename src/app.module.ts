import { Module } from '@nestjs/common';
import modules from './modules';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter } from './middleware/exception-handler';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthGuard } from './guards/jwt-auth.guard';
import { RolesGuard } from './guards/role.guard';

@Module({
  imports: [...modules, PrismaModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
