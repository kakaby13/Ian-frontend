import { Injectable } from "@angular/core";
import { Reward } from "../models/Reward";

@Injectable()
export class RewardService {
    public AddNewRewardIfNotExist(newReward: Reward): Reward {
        newReward.id = 7;
        return newReward;
    }

    public GetRewardsByStartupId(startupId: number): Reward[] {
        return [];
    }

    public RemoveRewardById(rewardId: number) {

    }

    public UnlockReward(rewardId: number, userId: number) {
        
    }
}