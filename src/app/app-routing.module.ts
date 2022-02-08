import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './AdminDashboard/AdminDashboard.component';
import { UserDashboardComponent } from './UserDashboard/UserDashboard.component';



const routes: Routes = [
    { path: 'user', component: UserDashboardComponent },
    { path: 'admin', component: AdminDashboardComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
