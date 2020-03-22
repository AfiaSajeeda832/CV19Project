import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminUIComponent } from './admin-ui/admin-ui.component';
import { FrontUIComponent } from './front-ui/front-ui.component';
import { AdminUIRoutingModule} from './admin-ui/admin-ui.routing.module';
import { FrontUIRoutingModule} from './front-ui/front-ui.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import  {MaterialModule} from './shared/material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    AdminUIComponent,
    FrontUIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminUIRoutingModule,
    FrontUIRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
