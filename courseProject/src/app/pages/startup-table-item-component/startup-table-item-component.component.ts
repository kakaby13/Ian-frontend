import { Component, Input, OnInit } from '@angular/core';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-startup-table-item-component',
  templateUrl: './startup-table-item-component.component.html',
  styleUrls: ['./startup-table-item-component.component.css']
})
export class StartupTableItemComponentComponent implements OnInit {

  @Input() startup: Startup;


  constructor() { }

  ngOnInit(): void {
  }

}
