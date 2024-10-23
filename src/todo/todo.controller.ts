import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ParseIntPipe,
} from '@nestjs/common';
import { ITodoService } from './interface/todo-service.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { Todo } from './todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: ITodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  @UsePipes(new ParseIntPipe())
  findOne(@Param('id') id: number) {
    return this.todoService.findOne(id);
  }
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(updateTodoDto);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.todoService.delete(id);
  }
}
