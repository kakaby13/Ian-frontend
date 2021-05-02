import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/api/achievement.service';
import { StartupService } from 'src/app/api/startup.service';
import { Achievement } from 'src/app/models/Achievement';
import { Startup } from 'src/app/models/Startup';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  id: number;
  startup: Startup;
  isEdit: boolean;
  achievementsList: Achievement[];
  chosedAchievementsList: Achievement[];
  subscription: Subscription;

  constructor(
    private readonly startupService: StartupService,
    private readonly achievementService: AchievementService,
    private activateRoute: ActivatedRoute,
    private readonly curentUserProvider: CurentUserProvider,
  ) {
      this.subscription = this.activateRoute.params.subscribe(params=>this.id=params['id']);

      let currentUser = this.curentUserProvider.GetCurrentUser();;

      this.startup = this.id == null 
        ? new Startup()
        : this.startupService.GetStartupById(this.id);

      this.isEdit = currentUser.id == this.startup?.author?.id || currentUser.isAdmin;

      this.achievementsList = this.achievementService.GetAllAchivements();
      this.chosedAchievementsList = this.achievementService.GetAvailableAchivementsByStartupId(this.startup.id);

   }

  ngOnInit(): void {
  }
}
