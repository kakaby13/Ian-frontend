import { Component, OnInit } from '@angular/core';
import { StartupService } from 'src/app/api/startup.service';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css']
})
export class TagSearchComponent implements OnInit {

  tag: string;
  startups: Startup[];

  constructor(
    private readonly startupService: StartupService,
  ) { 
    this.startups = this.startupService.GetStartupsByTag(this.tag);
  }

  ngOnInit(): void {
  }

}
