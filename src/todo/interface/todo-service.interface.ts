import { Todo } from '../todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';

export abstract class ITodoService {
  public abstract findAll(): Promise<Todo[]>;

  public abstract findOne(id: number): Promise<Todo>;

  public abstract create(todo: CreateTodoDto): Promise<Todo>;

  public abstract update(updateTodoDto: UpdateTodoDto): Promise<void>;

  public abstract delete(id: number): Promise<void>;
}
