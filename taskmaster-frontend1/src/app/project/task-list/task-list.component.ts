import { Component, inject } from '@angular/core';
import { Task } from '../../task.model';
import { AsyncPipe, DatePipe, CommonModule } from '@angular/common';
import { TaskService } from '../../task.service';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Observable } from 'rxjs';

const emptyTask = {
  name: '',
  description: '',
  dueDate: new Date(),
  completed: false,
  project: 1,
  id: 0,
};

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, TaskFormComponent, AsyncPipe,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Design wireframe',
      description: '',
      completed: false,
      dueDate: new Date('2023-07-31'),
      project: 1,
    },
    {
      id: 2,
      name: 'Develop frontend',
      description: '',
      completed: true,
      dueDate: new Date('2023-06-15'),
      project: 1,
    },
    {
      id: 3,
      name: 'Implement backend',
      description: '',
      completed: false,
      dueDate: new Date('2023-08-15'),
      project: 1,
    },
    {
      id: 4,
      name: 'Have a party',
      description: '',
      completed: true,
      dueDate: new Date('2023-11-15'),
      project: 1,
    },
  ];
  showModal: boolean = false;
  formType: 'CREATE' | 'UPDATE' = 'CREATE';
  selectedTask: Task = emptyTask;
  tasks$!: Observable<Task[]>;

  private taskService = inject(TaskService);

  constructor() {
    this.updateTasks();
  }

  updateTasks() {
    this.tasks$ = this.taskService.getTasks();
  }

  handleCheckbox(id: number) {
    // Récupérer la tâche par son ID à partir du service
    this.taskService.getTaskById(id).subscribe((task) => {
      // Inverser la valeur de completed
      task.completed = !task.completed;
      
      // Mettre à jour la tâche via le service
      this.taskService.updateTask(task).subscribe(
        (updatedTask) => {
          console.log('Task updated successfully:', updatedTask);
          this.updateTasks();
        },
        (error) => {
          console.error('Error updating task:', error);
        }
      );
    }, 
    (error) => {
      console.error('Error fetching task by id:', error);
    });
    
  }  
  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.updateTasks();
    });
  }

  updateTask(task: Task) {
    this.selectedTask = task;
    this.formType = 'UPDATE';
    this.showModal = true;
  }

  addNewTask() {
    this.selectedTask = emptyTask;
    this.formType = 'CREATE';
    this.showModal = true;
  }

  handleModalClose(type: 'SUBMIT' | 'CANCEL') {
    if (type === 'SUBMIT') {
      this.updateTasks();
    }
    this.showModal = false;
  }
}
