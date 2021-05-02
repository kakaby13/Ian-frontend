import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-startup-table-item-component',
  templateUrl: './startup-table-item-component.component.html',
  styleUrls: ['./startup-table-item-component.component.css']
})
export class StartupTableItemComponentComponent implements OnInit {

  @Input() startup: Startup;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToStartup() {
    this.router.navigate(['/startup', this.startup.id])
  }

  goToSearchByTag(tag: string) {
    this.router.navigate(['/tagsearch', tag])
  }
}
