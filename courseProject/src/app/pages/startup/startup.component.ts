import { Component, Input, OnInit } from '@angular/core';
import { AchievementService } from 'src/app/api/achievement.service';
import { StartupService } from 'src/app/api/startup.service';
import { UserService } from 'src/app/api/user.service';
import { Achievement } from 'src/app/models/Achievement';
import { Startup } from 'src/app/models/Startup';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

  @Input() startupId: number | null;

  startup: Startup;
  isEdit: boolean;
  achievementsList: Achievement[];
  chosedAchievementsList: Achievement[];

  constructor(
    private readonly startupService: StartupService,
    private readonly userService: UserService,
    private readonly achievementService: AchievementService,
  ) {
      this.startupId = 7;
      let userId = 1;


      let currentUser = this.userService.GetUserById(userId);
      this.startup = this.startupId == null 
        ? new Startup()
        : this.startupService.GetStartupById(this.startupId);

      this.isEdit = currentUser.id == this.startup.author.id || currentUser.isAdmin;

      this.achievementsList = this.achievementService.GetAllAchivements();
      this.chosedAchievementsList = this.achievementService.GetAvailableAchivementsByStartupId(this.startup.id);

   }

  ngOnInit(): void {
  }

}
