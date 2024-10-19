import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { ITodoService } from './todo-service.interface';
import { ITodoRepository } from '../todo-repository.interface';

@Injectable()
export class TodoService implements ITodoService {
  public constructor(private readonly todoRepository: ITodoRepository) {}

  public findAll(): Promise<Todo[]> {
    return this.todoRepository.findAll();
  }

  public findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  public create(title: string): Promise<Todo> {
    const todo = new Todo();
    todo.title = title;
    return this.todoRepository.add(todo);
  }

  public async update(id: number, isCompleted: boolean): Promise<void> {
    const todo = await this.todoRepository.findOne(id);
    if (todo) {
      todo.isCompleted = isCompleted;
      await this.todoRepository.save(todo);
    }
  }

  public async delete(id: number): Promise<void> {
    const todo = await this.todoRepository.findOne(id);
    await this.todoRepository.delete(todo);
  }
}
