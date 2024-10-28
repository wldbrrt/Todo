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
  dateFilter: TDateFilter,
  finishedFilter: TFinishedFilter
};

export type TTodosPayload = {
  count: number;
  id: number;
  todos: TTodo[];
};

export type TDateFilter = 'NEW_FIRST' | 'OLD_FIRST'

export type TFinishedFilter = 'SHOW_ALL' | 'SHOW_FINISHED' | 'SHOW_UNFINISHED'
