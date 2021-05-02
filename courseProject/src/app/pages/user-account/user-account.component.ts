import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AchievementService } from 'src/app/api/achievement.service';
import { StartupService } from 'src/app/api/startup.service';
import { UserService } from 'src/app/api/user.service';
import { Achievement } from 'src/app/models/Achievement';
import { Startup } from 'src/app/models/Startup';
import { User } from 'src/app/models/User';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  userId: number;

  startupsCreatedByUser: Startup[];
  user: User;
  isEdit: boolean;
  isOwner: boolean;
  userAchivements: Achievement[]; 
  subscription: Subscription; 

  constructor(
    private readonly startupService: StartupService,
    private readonly userService: UserService,
    private readonly achivementService: AchievementService,
    private readonly currentUserProvider: CurentUserProvider,
    private activateRoute: ActivatedRoute,

  ) { 
    this.subscription = this.activateRoute.params.subscribe(params=>this.userId=params['userId']);
    let curentUser = this.currentUserProvider.GetCurrentUser();

    if(this.userId == undefined) {
      this.userId = curentUser.id;
      this.user = curentUser;
    } else {
      this.user = this.userService.GetUserById(this.userId);
    }
    this.startupsCreatedByUser = this.startupService.GetSturtupsCreatedByUser(this.user.id);
    this.userAchivements = this.achivementService.GetAchivementsByUserId(this.user.id);
    this.isEdit = this.user.isAdmin || this.user.id == curentUser.id;
    this.isOwner = this.user.id == curentUser.id;
  }

  ngOnInit(): void {
  }

  public addMoneyToBalance() {
    let currentUser = this.currentUserProvider.GetCurrentUser();
    currentUser.money += 1000;
    this.userService.SaveUserInfo(currentUser);
  }
}
