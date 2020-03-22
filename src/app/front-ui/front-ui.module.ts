import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../shared/material/material.module';
import { FrontUIRoutingModule} from '../front-ui/front-ui.routing.module';
import { FrontUIComponent } from './front-ui.component';



@NgModule({
  declarations: [
    FrontUIComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FrontUIRoutingModule,
    FrontUIComponent
  ]
})
export class FrontUiModule { }
