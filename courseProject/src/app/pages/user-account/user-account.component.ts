import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RewardService } from 'src/app/api/reward.service';
import { StartupService } from 'src/app/api/startup.service';
import { UserService } from 'src/app/api/user.service';
import { Reward } from 'src/app/models/Reward';
import { Startup } from 'src/app/models/Startup';
import { User } from 'src/app/models/User';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css', '../../styles.css']
})
export class UserAccountComponent implements OnInit {

  userId: number;

  startupsCreatedByUser: Startup[];
  sturtupsFinancedByUser: Startup[];
  user: User;
  isEdit: boolean;
  isOwner: boolean;
  userAchivements: Reward[]; 
  subscription: Subscription; 

  constructor(
    private readonly startupService: StartupService,
    private readonly userService: UserService,
    private readonly achivementService: RewardService,
    private activateRoute: ActivatedRoute,
    private readonly router: Router,

  ) { 

  }

  async ngOnInit() {
    this.subscription = this.activateRoute.params.subscribe(params=>this.userId=params['userId']);
    let curentUser = CurentUserProvider.Instance.GetCurrentUser();

    if(this.userId == undefined) {
      this.userId = curentUser.id;
      this.user = curentUser;
    } else {
      this.user = await this.userService.GetUserById(this.userId);
    }

    this.startupsCreatedByUser = await this.startupService.GetSturtupsCreatedByUser(this.user.id);
    this.sturtupsFinancedByUser = await  this.startupService.GetSturtupsFinancedByUser(this.user.id);
    this.userAchivements = await this.achivementService.GetRewardsByUserId(this.user.id);
    this.isEdit = this.user.isAdmin || this.user.id == curentUser.id;
    this.isOwner = this.user.id == curentUser.id;
  }

  public addMoneyToBalance() {
    let currentUser = CurentUserProvider.Instance.GetCurrentUser();
    currentUser.money += 1000;
    this.userService.SaveUserInfo(currentUser);
  }

  public saveChanges() {
    this.userService.SaveUserInfo(this.user);
  }

  public createStartup() {
    this.router.navigate(['/create-startup'])
  }
}
