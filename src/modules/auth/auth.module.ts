/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ListService } from './list.service';
import { AuthController } from './auth.controller';
import { SignupService } from './signup.service';
import { PrismaModule } from '../prisma/prisma.module';
import * as jwt from '@nestjs/jwt';

@Module({
  imports: [
    PrismaModule,
    jwt.JwtModule.register({
      global: true,
      secret: process.env.CLIENT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [SignupService, ListService],
  controllers: [AuthController],
})
export class AuthModule {}
