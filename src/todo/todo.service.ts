import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoReposity: Repository<Todo>,
  ) {}

  findAll() {
    return this.todoReposity.find();
  }
  findOne(id: number) {
    return this.todoReposity.findOne({ where: { id: id } });
  }
  create(title: string) {
    const todo = new Todo();
    todo.title = title;
    return this.todoReposity.save(todo);
  }
  async update(id: number, isCompleted: boolean) {
    const todo = await this.todoReposity.findOne({ where: { id: id } });
    if (todo) {
      todo.isCompleted = isCompleted;
      return this.todoReposity.save(todo);
    }
    return null;
  }
  delete(id: number) {
    return this.todoReposity.delete(id).then(() => {});
  }
}
