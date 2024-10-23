import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { ProjectTitleComponent } from './project-title/project-title.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TaskListComponent, ProgressBarComponent, ProjectTitleComponent,HeaderComponent,SigninComponent,RegisterComponent,SidebarComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent {}
