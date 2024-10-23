import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { ITodoService } from './interface/todo-service.interface';
import { ITodoRepository } from './todo-repository.interface';
import { TodoRepository } from './todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [
    { provide: ITodoService, useClass: TodoService },
    { provide: ITodoRepository, useClass: TodoRepository },
  ],
})
export class TodoModule {}
