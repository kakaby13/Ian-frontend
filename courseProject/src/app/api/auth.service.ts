import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/Login";
import { Singin } from "../models/Singin";
import { User } from "../models/User";

import { UrlProvider } from "./router";
import { CurentUserProvider} from "../services/CurentUserProvider";



@Injectable()
export class AuthService {

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public async Signin(signin: Singin) {
        var user = this.http.post<User>(UrlProvider.host + '/login', signin).toPromise();
        CurentUserProvider.Instance.SaveCurrentUser(await user);
    }

    public async Login(login: Login) {
        var user = this.http.post<User>(UrlProvider.host + '/register', login).toPromise();
        CurentUserProvider.Instance.SaveCurrentUser(await user);
    }
}