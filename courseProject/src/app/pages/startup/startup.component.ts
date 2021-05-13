import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RewardService } from 'src/app/api/reward.service';
import { StartupService } from 'src/app/api/startup.service';
import { Reward } from 'src/app/models/Reward';
import { Startup } from 'src/app/models/Startup';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css', '../../styles.css']
})
export class StartupComponent implements OnInit {

  id: number;
  startup: Startup;
  isEdit: boolean;
  achievementsList: Reward[];
  chosedAchievementsList: Reward[];
  subscription: Subscription;
  isStartupExist: boolean;

  constructor(
    private readonly startupService: StartupService,
    private readonly achievementService: RewardService,
    private activateRoute: ActivatedRoute,
  ) {
      
   }

  async ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params=>this.id=params['id']);

      let currentUser = CurentUserProvider.Instance.GetCurrentUser();

      this.startup = this.id == null 
        ? this.getNewStartup()
        : await this.startupService.GetStartupById(this.id);

      this.isStartupExist = this.startup.id != 0;

      this.isEdit = currentUser.id == this.startup?.author?.id || currentUser.isAdmin;

      this.achievementsList = await this.achievementService.GetAllRewards();
      this.chosedAchievementsList = await this.achievementService.GetRewardsByStartupId(this.startup.id);
  }

  saveChanges() {
    this.startupService.Save(this.startup);
  }

  private getNewStartup() : Startup {
    let startup = new Startup();
    startup.id = 0;
    startup.author = CurentUserProvider.Instance.GetCurrentUser();

    return startup;
  }
}
