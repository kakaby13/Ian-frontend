import { Component, OnInit } from '@angular/core';
import { AchievementService } from 'src/app/api/achievement.service';
import { StartupService } from 'src/app/api/startup.service';
import { UserService } from 'src/app/api/user.service';
import { Achievement } from 'src/app/models/Achievement';
import { Startup } from 'src/app/models/Startup';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  startupsCreatedByUser: Startup[];
  user: User;
  isEdit: boolean;
  userAchivements: Achievement[];  

  constructor(
    private readonly startupService: StartupService,
    private readonly userService: UserService,
    private readonly achivementService: AchievementService
  ) { 
    let curentUserId = 4;
    this.user = this.userService.GetUserById(6);
    this.startupsCreatedByUser = this.startupService.GetSturtupsCreatedByUser(this.user.id);
    this.userAchivements = this.achivementService.GetAchivementsByUserId(this.user.id);
    this.isEdit = this.user.isAdmin || this.user.id == curentUserId;
  }

  ngOnInit(): void {
  }

}
