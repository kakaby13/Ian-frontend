import { Injectable } from "@angular/core";
import { Reward } from "../models/Reward";
import { HttpClient } from '@angular/common/http';
import { UrlProvider } from "./router";

@Injectable()
export class RewardService {
 
    controllerUrl: string = 'reward'

    constructor( 
        private readonly http: HttpClient,
    ) {
    }

    public AddNewRewardIfNotExist(newReward: Reward): Promise<Reward> {
        return this.http.post<Reward>(UrlProvider.host + this.controllerUrl + '/addNewRewardIfNotExist', newReward).toPromise();
    }

    public GetRewardsByStartupId(startupId: number): Promise<Reward[]> {
        return this.http.get<Reward[]>(UrlProvider.host + this.controllerUrl + '/getRewardsByStartupId',{
            params: {
                startupId: startupId.toString()
            }
        }).toPromise(); 
    }

    public GetAllRewards(): Promise<Reward[]> {
        return this.http.get<Reward[]>(UrlProvider.host + this.controllerUrl + '/getAllRewards').toPromise();
    }
    
    public RemoveRewardById(rewardId: number) {
        return this.http.get(UrlProvider.host + this.controllerUrl + '/removeRewardById',{
            params: {
                rewardId: rewardId.toString()
            }
        }).toPromise(); 
    }

    public GetRewardsByUserId(userId: number): Promise<Reward[]> {
        return this.http.get<Reward[]>(UrlProvider.host + this.controllerUrl + '/getRewardsByUserId',{
            params: {
                userId: userId.toString()
            }
        }).toPromise(); 
    }

    public UnlockReward(rewardId: number, userId: number) {
        this.http.get(UrlProvider.host + this.controllerUrl + '/unlockReward',{
            params: {
                rewardId: rewardId.toString(),
                userId: userId.toString()
            }
        }).toPromise();
    }
}