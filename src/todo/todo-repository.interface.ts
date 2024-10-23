import { Todo } from './todo.entity';

export abstract class ITodoRepository {
  public abstract findAll(): Promise<Todo[]>;

  public abstract findOne(id: number): Promise<Todo>;

  public abstract add(todo: Todo): Promise<Todo>;

  public abstract save(todo: Todo): Promise<void>;

  public abstract delete(todo: Todo): Promise<void>;
}
