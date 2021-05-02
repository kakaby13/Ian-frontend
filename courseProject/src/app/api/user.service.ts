import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { CurentUserProvider } from "../services/CurentUserProvider";
import { Helper } from "./foo";

@Injectable()
export class UserService {
    constructor(
        private readonly router: Router,
        private readonly curentUserProvider: CurentUserProvider,
    ) {
    }

    public GetUserById(id: number): User {
        return Helper.GetUserById(id);
    }

    public SaveUserInfo(user: User) {
        //save
        //assert that it saved
        this.curentUserProvider.SaveCurrentUser(user);
    }
}