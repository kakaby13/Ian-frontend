import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/api/achievement.service';
import { StartupService } from 'src/app/api/startup.service';
import { UserService } from 'src/app/api/user.service';
import { Achievement } from 'src/app/models/Achievement';
import { Startup } from 'src/app/models/Startup';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  startup: Startup;
  isEdit: boolean;
  achievementsList: Achievement[];
      id: number;
  chosedAchievementsList: Achievement[];
  private subscription: Subscription;

  constructor(
    private readonly startupService: StartupService,
    private readonly userService: UserService,
    private readonly achievementService: AchievementService,
    private activateRoute: ActivatedRoute
  ) {
      let userId = 1;

      this.subscription = this.activateRoute.params.subscribe(params=>this.id=params['id']);

      let currentUser = this.userService.GetUserById(userId);
      this.startup = this.id == null 
        ? new Startup()
        : this.startupService.GetStartupById(this.id);

      this.isEdit = currentUser.id == this.startup.author.id || currentUser.isAdmin;

      this.achievementsList = this.achievementService.GetAllAchivements();
      this.chosedAchievementsList = this.achievementService.GetAvailableAchivementsByStartupId(this.startup.id);

   }

  ngOnInit(): void {
  }

}
