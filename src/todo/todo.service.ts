import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { ITodoService } from './interface/todo-service.interface';
import { ITodoRepository } from './todo-repository.interface';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService implements ITodoService {
  public constructor(private readonly todoRepository: ITodoRepository) {}

  public findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  public findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  public create(todo: CreateTodoDto): Promise<Todo> {
    const newTodo = new Todo();
    newTodo.title = todo.title;
    return this.todoRepository.add(newTodo);
  }

  public async update(updateTodoDto: UpdateTodoDto): Promise<void> {
    const todo = await this.todoRepository.findOne(updateTodoDto.id);
    if (todo) {
      if (updateTodoDto.title !== undefined) {
        todo.title = updateTodoDto.title;
      }
      if (updateTodoDto.isCompleted !== undefined) {
        todo.isCompleted = updateTodoDto.isCompleted;
      }
      await this.todoRepository.save(todo);
    }
  }

  public async delete(id: number): Promise<void> {
    const todo = await this.todoRepository.findOne(id);
    await this.todoRepository.delete(todo);
  }
}
