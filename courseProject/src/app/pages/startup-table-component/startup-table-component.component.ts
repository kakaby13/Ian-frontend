import { Component, Input, OnInit } from '@angular/core';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-startup-table-component',
  templateUrl: './startup-table-component.component.html',
  styleUrls: ['./startup-table-component.component.css', '../../styles.css']
})
export class StartupTableComponentComponent implements OnInit {

  @Input()
  startupArray: Startup[];
  constructor() { }

  ngOnInit(): void {
  }

}
