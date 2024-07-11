import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { VerifyService } from './verify.service';
import { VerifyPhoneDto } from './dto';

@Controller('verify')
export class VerifyController {
  constructor(private readonly verifyService: VerifyService) {}

  @HttpCode(200)
  @Post()
  async Verify(@Body() { phone }: VerifyPhoneDto) {
    return await this.verifyService.verifyPhoneService({ phone });
  }
}
