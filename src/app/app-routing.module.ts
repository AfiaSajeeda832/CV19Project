import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminUIRoutingModule } from './admin-ui/admin-ui.routing.module';
import { FrontUIRoutingModule } from './front-ui/front-ui.routing.module';
import { FrontUIComponent } from './front-ui/front-ui.component';


const routes: Routes = [
  {
    path:'', redirectTo:'front', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),AdminUIRoutingModule,FrontUIRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
