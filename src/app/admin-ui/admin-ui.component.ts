import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../shared/shared.module';



@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.css']
})
export class AdminUIComponent implements OnInit {

  sideBarOpen=true;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
