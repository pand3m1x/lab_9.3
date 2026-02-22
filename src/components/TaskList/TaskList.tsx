// // types/index.ts
// export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   status: TaskStatus;
//   priority: 'low' | 'medium' | 'high';
//   dueDate: string;
// }
 
// export interface TaskListProps {
//   tasks: Task[];
//   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
//   onDelete: (taskId: string) => void;
// }
import TaskItem from './components/TaskItem/TaskItem.tsx'

function TaskList (

  const TaskList()

  return(
    <ul>
      <li>{TaskItem}</li>
    </ul>
  );
)

export default TaskList