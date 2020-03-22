import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { AdminUIComponent } from './admin-ui.component';
import { MaterialModule } from '../shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontUIRoutingModule} from '../front-ui/front-ui.routing.module';
import { AdminUIRoutingModule} from './admin-ui.routing.module';


@NgModule({
  declarations: [
    AdminUIComponent

  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    FrontUIRoutingModule,
    AdminUIRoutingModule,
    AdminUIComponent

    
  ],
  exports:[
    MaterialModule,
    SharedModule,
    DashboardComponent
  ]
})
export class AdminUiModule { }
