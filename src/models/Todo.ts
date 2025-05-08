export class Todo {
  private static idCounter = 0;
  public id: number;
  public createdAt: Date;

  constructor(
    public task: string,
    public isDone: boolean = false,
    public priority: string = "Medium",
    public isUpdating: boolean = false
  ) {
    this.id = ++Todo.idCounter;
    this.createdAt = new Date();
  }
}
