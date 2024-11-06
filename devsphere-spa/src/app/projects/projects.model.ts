export interface Project {
  id: number;
  title: string;
  description: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  title: string;
  status: 'To Do' | 'In Progress' | 'Done';
}
