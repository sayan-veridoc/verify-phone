import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';

export class VerifyPhoneDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Phone No is required' })
  @IsString({ message: 'Phone No must be a string' })
  @Matches(/^\+?[1-9]\d{1,14}$/, {
    message: 'Phone No must be a valid phone number',
  })
  phone: string;
}
