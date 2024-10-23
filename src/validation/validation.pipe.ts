import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any) {
    if (value.title.length > 255) {
      throw new BadRequestException('Title is too long');
    }
    return value;
  }
}
