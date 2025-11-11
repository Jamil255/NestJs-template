/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';
import AppValidationError from 'src/exceptions/AppValidatorError';
import { SignupDto } from './dto/auth.dto';

@Injectable()
export class SignupService {
  constructor() {}

  signup(dto: SignupDto) {
    try {
      console.log(dto);
    } catch (error) {
      throw new AppValidationError(error?.message, error?.code);
    }
  }
}
