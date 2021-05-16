import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../models/Login";
import { Singin } from "../models/Singin";

import { UrlProvider } from "./router";



@Injectable()
export class AuthService {

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public Signin(signin: Singin) {
        this.http.post(UrlProvider.host + '/login', signin).toPromise();
    }

    public Login(login: Login) {
        this.http.post(UrlProvider.host + '/register', login).toPromise();
    }
}