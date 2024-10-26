export type TTodo = {
  id: number;
  title: string;
  content: string;
  tags: string[];
  isCompleted: boolean;
  date: number;
};

export type TTodos = {
  count: number;
  id: number;
  searchName: string | null
  todos: TTodo[];
};

export type TTodosPayload = {
  count: number;
  id: number;
  todos: TTodo[];
};
