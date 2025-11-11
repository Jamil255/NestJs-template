/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export enum UserStatus {
  PENDING = 'PENDING',
  APPROVE = 'APPROVE',
  REJECTED = 'REJECTED',
}

export enum RoleTitle {
  CLIENT = 'client',
  VENDOR = 'vendor',
  ADMIN = 'admin',
}

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'jamil', description: '' })
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail({}, { message: 'Please enter a valid email address' })
  @ApiProperty({ example: 'jamil@gmail.com', description: 'user mail' })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'user password' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'user phone number ' })
  phoneNo: string;

  @IsEnum(RoleTitle)
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ enum: RoleTitle })
  roleTitle: RoleTitle;

  @IsString()
  @IsOptional()
  @ApiProperty({ example: '....', description: 'user otp ' })
  otp?: string;

  @IsEnum(UserStatus)
  @IsOptional()
  @ApiProperty({ enum: UserStatus })
  status?: UserStatus;

  @IsOptional()
  @IsArray()
  @ApiProperty({
    example: [
      {
        filename: 'white-gold.jpg',
        fileUrl:
          'https://auction-vga-app.s3.me-central-1.amazonaws.com/1753291770297-wh…',
        mimetype: 'image/jpeg',
        key: '2930393003/white-gold.jpg',
      },
    ],
    description: 'Subcategories as a JSON string',
  })
  image?: string | null;

  @IsOptional()
  @IsArray()
  @ApiProperty({
    example: [
      {
        filename: 'white-gold.jpg',
        fileUrl:
          'https://auction-vga-app.s3.me-central-1.amazonaws.com/1753291770297-wh…',
        mimetype: 'image/jpeg',
        key: '2930393003/white-gold.jpg',
      },
    ],
    description: 'Subcategories as a JSON string',
  })
  certificationImage?: string | null;
}

export class OTPDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'User phone number' })
  phoneNo: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '....', description: 'user otp ' })
  otp: string;
}

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'User phone number' })
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'User password' })
  password: string;
}

export class ForgetPwdDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'User phone number' })
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'User password' })
  password: string;
}

export class ResetPwdDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'User phone number' })
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'User password' })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: '5caf27ad-afc8-4ecc-8e9c-eabd1922ae91',
    description: 'user password token',
  })
  passwordToken: string;
}
export class ChangePwdDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: '03323445892', description: 'User phone number' })
  phoneNo: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'User password' })
  oldPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  @ApiProperty({ example: '112233', description: 'User password' })
  newPassword: string;
}

export class RefreshTokenDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NmZhYzkyZDU1NGEyYjg3MGI0ODZlMCIsInVzZXJJZCI6IjY4NmU3NWNjNDEzMzQ3YjllNDViNTBhOSIsImVtYWlsIjoidGVzdEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6InRlc3QiLCJjbGllbnRJZCI6Impld2xsZXJ5LWFwcCIsInNjb3BlcyI6WyJjbGllbnQiXSwiaWF0IjoxNzUyMTQ5MTM5LCJleHAiOjE3NTIyMzU1Mzl9.h5XLX3Q9tNKHJmh-TGRIfZ0xTK-CmAnyb8d_ycCzQKo',
    description: 'user refresh token',
  })
  token: string;
}
