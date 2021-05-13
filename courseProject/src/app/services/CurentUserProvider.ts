import { User } from "../models/User";

export class CurentUserProvider {


    public GetCurrentUser(): User {
        return JSON.parse(localStorage.getItem("user") || '{}') as User;
    }

    public SaveCurrentUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
        this.SaveCurrentUserId(user.id);
    }

    public GetCurrentUserId(): number {
        return Number(localStorage.getItem("userid"));
    }

    public SaveCurrentUserId(userid: number) {
        localStorage.setItem('userid', userid.toString());
    }

    public GetJwt(): string {
        return String(localStorage.getItem("jwt") || null);
    }

    public SaveJwt(token: string) {
        localStorage.setItem('jwt', token);
    }

    public IsUserLogedIn(): boolean {
        return this.GetCurrentUserId() !== 0;
    }

    public LogIn(user: User) {
        this.SaveCurrentUser(user);
    }

    public LogOut() {
        localStorage.setItem('user', '');
        localStorage.setItem('userid','0');
        localStorage.setItem('jwt', '');
    }

    public GetUserToken() {

    }

    private static _instance: CurentUserProvider;
    private constructor() { 
        this.LogOut();
    }

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

}
