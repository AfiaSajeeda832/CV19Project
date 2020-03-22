import { Component, OnInit } from '@angular/core';
import {AdminUiModule} from './../admin-ui.module';
import {SharedModule} from '../../shared/shared.module';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
