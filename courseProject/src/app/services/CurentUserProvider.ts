import { Injectable } from "@angular/core";
import { Helper } from "../api/foo";
import { User } from "../models/User";


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

    private static _instance: CurentUserProvider;
    private constructor()
    {
        //...
    }

    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }

}
