import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { Helper } from "./foo";

@Injectable()
export class UserService {
    constructor(
        private readonly router: Router,
    ) {
    }

    public GetUserById(id: number): User {
        return Helper.GetUserById(id);
    }

    public SaveUserInfo(user: User) {

    }
}