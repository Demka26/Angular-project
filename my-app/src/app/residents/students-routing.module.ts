import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentsListComponent } from './students-list/students-list.component';

const routes: Routes = [
  {path:'residents', component:StudentsListComponent}, 
  {path:'resident/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
