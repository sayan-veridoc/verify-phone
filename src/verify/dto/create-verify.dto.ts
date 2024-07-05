import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class VerifyPhoneDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'Phone No is required' })
  @IsString({ message: 'Phone No must be a string' })
  phone: string;
}
