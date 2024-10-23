import { Injectable } from '@nestjs/common';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ITodoRepository } from './todo-repository.interface';

@Injectable()
export class TodoRepository implements ITodoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>,
  ) {}

  public findAll(): Promise<Todo[]> {
    return this.repository.find();
  }

  public findOne(id: number): Promise<Todo | null> {
    return this.repository.findOneBy({ id });
  }

  public async add(entity: Todo): Promise<Todo> {
    return await this.repository.save(entity);
  }

  public async save(entity: Todo): Promise<void> {
    await this.repository.save(entity);
  }

  public async delete(entity: Todo): Promise<void> {
    await this.repository.delete(entity);
  }
}
