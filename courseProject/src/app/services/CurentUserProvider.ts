import { Injectable } from "@angular/core";
import { Helper } from "../api/foo";
import { User } from "../models/User";


@Injectable()
export class CurentUserProvider {


    public GetCurrentUser(): User {

        return Helper.GetUserById(1);
    }

    public IsUserLogedIn(): boolean {
        return true;
    }

    public SaveCurrentUser(user: User) {

    }

    public GetUserToken() {

    }

}