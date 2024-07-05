import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { VerifyPhoneDto } from './dto';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { catchError, lastValueFrom, map } from 'rxjs';
import { AxiosError, AxiosResponse } from 'axios';
import { VerifyPhoneAPIResp, ResponseData } from './types';

@Injectable()
export class VerifyService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  async verifyPhoneService({ phone }: VerifyPhoneDto): Promise<ResponseData> {
    const uri = this.configService.getOrThrow('VERIFY_API_URL');
    const api_key = this.configService.getOrThrow('API_KEY');
    const encodedPhone = encodeURIComponent(phone);
    const apiUrl = `${uri}?phone=${encodedPhone}&key=${api_key}`;
    const responseData = await lastValueFrom(
      this.httpService.get(apiUrl).pipe(
        map((response: AxiosResponse<VerifyPhoneAPIResp>) => {
          return response.data;
        }),
        catchError((error: AxiosError) => {
          throw new HttpException(
            error.response?.data || 'Error verifying phone number',
            error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }),
      ),
    );

    return {
      message: 'Phone Number Verified Successfully',
      data: responseData,
      statusCode: HttpStatus.OK,
    };
  }
}
