export default interface todos {
  name: string,
  color: string,
  uncompleted: number,
  completed: number,
  todos: {
    title: string,
    completed: boolean
  }[];
}