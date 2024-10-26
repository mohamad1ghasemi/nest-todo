import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  providers: [AuthService],
  controllers: [AbortController],
})
export class AuthModule {}
