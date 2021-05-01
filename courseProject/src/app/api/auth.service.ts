import { Injectable } from "@angular/core";
import { Login } from "../models/Login";
import { Singin } from "../models/Singin";
import { User } from "../models/User";
import { Helper } from "./foo";



@Injectable()
export class AuthService {
    public Signin(signin: Singin): User {
        return Helper.GetUserById(5);
    }

    public Login(login: Login): User {
        return Helper.GetUserById(5);
    }
}