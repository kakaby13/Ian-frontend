import { Achievement } from "./Achievement";
import { User } from "./User";

export class Startup {
    id: number;
    header: string;
    content: string;
    author: User;
    achievements: Array<Achievement>;
    tegs: Array<string>;
    moneyNeeded: number;
    moneyColected: number;
    

}