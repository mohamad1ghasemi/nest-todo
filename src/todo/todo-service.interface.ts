import { Todo } from './todo.entity';

export abstract class ITodoService {
  public abstract findAll(): Promise<Todo[]>;

  public abstract findOne(id: number): Promise<Todo>;

  public abstract create(title: string): Promise<Todo>;

  public abstract update(id: number, isCompleted: boolean): Promise<void>;

  public abstract delete(id: number): Promise<void>;
}
