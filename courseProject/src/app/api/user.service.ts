import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { CurentUserProvider } from "../services/CurentUserProvider";
import { Helper } from "./foo";
import {HttpClient} from '@angular/common/http';
import { UrlProvider } from "./router";

@Injectable()
export class UserService {

    controllerUrl: string = 'Account'

    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly curentUserProvider: CurentUserProvider,
    ) {
    }

    public GetUserById(id: number): Promise<User> {

        let user = {};
        return this.http.post<User>(UrlProvider.host + this.controllerUrl + '/SaveUser', user).toPromise();
    }

    public SaveUserInfo(user: User) {
        //save
        return this.http.post<User>(UrlProvider.host + this.controllerUrl + '/SaveUser', user).toPromise();

        //assert that it saved
        this.curentUserProvider.SaveCurrentUser(user);
    }
}
