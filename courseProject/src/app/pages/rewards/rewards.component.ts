import { Component, Input, OnInit } from '@angular/core';
import { RewardService } from 'src/app/api/reward.service';
import { Reward } from 'src/app/models/Reward';
import { Startup } from 'src/app/models/Startup';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css', '../../styles.css']
})
export class RewardsComponent implements OnInit {

  @Input()
  isEdit: boolean;

  @Input()
  startup: Startup;

  newRewardText: string;
  newRewardMoney: number;

  constructor(
    private readonly rewardsService: RewardService,
    private readonly curentUserProvider: CurentUserProvider,
  ) { 
    this.newRewardText = "";
    this.newRewardMoney = 0;
  }

  ngOnInit(): void {
  }

  public async addReward() {
    let reward = new Reward();
    reward.startupId = this.startup.id;
    reward.text = this.newRewardText;
    reward.money = this.newRewardMoney;

    let justAddedReward = this.rewardsService.AddNewRewardIfNotExist(reward);
    this.startup.rewards.push(await justAddedReward);

    this.newRewardText = "";
    this.newRewardMoney = 0;
  }

  public removeRewardById(rewardId: number){
    this.rewardsService.RemoveRewardById(rewardId);
    this.startup.rewards = this.startup.rewards.filter(c => c.id !== rewardId);
  }

  public unlockReward(rewardId: number) {
    this.rewardsService.UnlockReward(rewardId, this.curentUserProvider.GetCurrentUser().id);
  }
}
