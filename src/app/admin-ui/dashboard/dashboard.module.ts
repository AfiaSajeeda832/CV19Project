import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AdminUiModule} from '../admin-ui.module';
import { MaterialModule } from '../../shared/material/material.module';
import { MatDividerModule} from '@angular/material/divider';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminUiModule,
    MatDividerModule,
    MaterialModule
  ],
  exports:[
    DashboardComponent
  ]
 
})
export class DashboardModule { }
