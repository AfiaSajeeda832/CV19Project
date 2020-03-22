import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MaterialModule} from './material/material.module';
import { RouterModule } from '@angular/router';
import { FrontUIRoutingModule} from '../front-ui/front-ui.routing.module';
import {AdminUIRoutingModule} from '../admin-ui/admin-ui.routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FrontUIRoutingModule,
    AdminUIRoutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
