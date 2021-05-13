import { Injectable } from "@angular/core";
import { User } from "../models/User";
import { CurentUserProvider } from "../services/CurentUserProvider";
import { HttpClient } from '@angular/common/http';
import { UrlProvider } from "./router";

@Injectable()
export class UserService {

    controllerUrl: string = 'account'

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public GetUserById(id: number): Promise<User> {
        return this.http.get<User>(UrlProvider.host + this.controllerUrl + '/getUserById',{
            params: {
              id: id.toString()
            }
        }).toPromise();
    }

    public SaveUserInfo(user: User) {
        //save
        this.http.post(UrlProvider.host + this.controllerUrl + '/createUser', user).toPromise();

        //assert that it saved
        CurentUserProvider.Instance.SaveCurrentUser(user);
    }
}
