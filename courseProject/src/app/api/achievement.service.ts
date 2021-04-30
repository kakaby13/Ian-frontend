import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Achievement } from "../models/Achievement";
import { Helper } from "./foo";

@Injectable()
export class AchievementService {
    constructor(
        private readonly router: Router,
    ) {
    }

    public GetAllAchivements(): Achievement[] {
        return Helper.GetRandomAchivements();
    }

    public GetAchivementsByUserId(id: number): Achievement[] {
        return Helper.GetRandomAchivements();
    }

    public GetAvailableAchivementsByStartupId(id: number): Achievement[] {
        return Helper.GetRandomAchivements();
    }

    public SaveNewAchivement(achivement: Achievement) {

    }
}