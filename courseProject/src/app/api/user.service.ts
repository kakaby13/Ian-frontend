import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../models/User";
import { CurentUserProvider } from "../services/CurentUserProvider";
import { Helper } from "./foo";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(
        private readonly http: HttpClient,
        private readonly router: Router,
        private readonly curentUserProvider: CurentUserProvider,
    ) {
    }

    public async GetUserById(id: number): Promise<User> {

      const user = await this.http.get<User>('http://localhost:8080/account').toPromise();

      return user;
    }

    public SaveUserInfo(user: User) {
        //save
        //assert that it saved
        this.curentUserProvider.SaveCurrentUser(user);
    }
}
