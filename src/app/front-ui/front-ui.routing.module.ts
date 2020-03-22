import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontUIComponent } from './front-ui.component';
import { HomeComponent } from './home/home.component';




const frontRoutes: Routes = [
    {
        path:'front',
        component:FrontUIComponent,
        children:[
          {
            path:'home', component: HomeComponent
          }  
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(frontRoutes)],
  exports: [RouterModule],
  declarations: [HomeComponent]
})
export class FrontUIRoutingModule { }
