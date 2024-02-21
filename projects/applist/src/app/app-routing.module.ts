import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskdetailComponent } from './todolist/taskdetail/taskdetail.component';
import { TasklistComponent } from './todolist/tasklist/tasklist.component';
import { TodolistComponent } from './todolist/todolist.component';
import { MotivationComponent } from './motivation/motivation.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'todolist',component:TodolistComponent,
  children:[
    {
      path: '',component:TasklistComponent
    },
    {
      path: 'taskdetail/:taskId',component:TaskdetailComponent
    }
  ]},
  {path: 'motivation',component:MotivationComponent},
  {path: 'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
