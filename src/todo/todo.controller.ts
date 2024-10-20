import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ITodoService } from './todo-service.interface';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: ITodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }
  @Post()
  create(@Body('title') title: string) {
    return this.todoService.create(title);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body('isCompleted') isCompleted: boolean) {
    return this.todoService.update(id, isCompleted);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
