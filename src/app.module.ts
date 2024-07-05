import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { VerifyModule } from './verify/verify.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
    }),
    VerifyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
