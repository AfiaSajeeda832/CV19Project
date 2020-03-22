import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FrontUIRoutingModule} from '../../../front-ui/front-ui.routing.module';
import {AdminUIRoutingModule} from '../../../admin-ui/admin-ui.routing.module';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
