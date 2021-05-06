import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Startup } from "../models/Startup";
import { User } from "../models/User";
import { Helper } from "./foo";

@Injectable()
export class StartupService {
    constructor(
        private readonly router: Router,
    ) {
    }

    public Save(startup: Startup) {

    }

    public GetAllStartups(): Startup[] {
        return Helper.GetRandomListOfSturtups();
    }

    public GetStartupById(id: number): Startup {
        return Helper.GetRandomListOfSturtups()[0];
    }

    public GetSturtupsCreatedByUser(id: Number): Startup[] {
        return Helper.GetRandomListOfSturtups();
    }

    public GetSturtupsFinancedByUser(id: number): Startup[] {
        return Helper.GetRandomListOfSturtups();
    }

    public DonateToSturtup(currentUser: User, startupToDonate: Startup, moneyAmount: Number) {
        
    }

    public GetStartupsByTag(tag: string) :Startup[] {
        return Helper.GetRandomListOfSturtups();
    }
}