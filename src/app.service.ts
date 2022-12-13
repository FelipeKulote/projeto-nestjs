import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! Please check https://projeto-nestjs-production.up.railway.app/api for Swagger docs';
  }
}
