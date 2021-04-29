import { Component, Input, OnInit } from '@angular/core';
import { StartupService } from 'src/app/api/startup.service';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  @Input() startupId: number | null;
  startup: Startup;
  isEdit: Boolean;
  constructor(
    private readonly startupService: StartupService,
  ) {
    this.isEdit = true;
    this.startup = this.startupId == null 
      ? new Startup()
      : startupService.GetStartupById(this.startupId);
   }

  ngOnInit(): void {
  }

}
