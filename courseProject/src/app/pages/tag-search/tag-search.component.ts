import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StartupService } from 'src/app/api/startup.service';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-tag-search',
  templateUrl: './tag-search.component.html',
  styleUrls: ['./tag-search.component.css', '../../styles.css']
})
export class TagSearchComponent implements OnInit {

  tag: string;
  startups: Startup[];
  subscription: Subscription;

  constructor(
    private readonly startupService: StartupService,
    private activateRoute: ActivatedRoute,
  ) { 
  }

  async ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params=>this.tag=params['tag']);

    this.startups = await this.startupService.GetStartupsByTag(this.tag);
  }
}
