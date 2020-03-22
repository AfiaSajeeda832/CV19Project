import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUIComponent} from './admin-ui.component';
import { DashboardComponent } from './dashboard/dashboard.component';



const adminRoutes: Routes = [
  {
    path:'admin',
    component:AdminUIComponent,
    children:[
      {
        path:'dashboard', component: DashboardComponent
      }  
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
  declarations: [DashboardComponent]
})
export class AdminUIRoutingModule { }
