import { Achievement } from "./Achievement";
import { Reward } from "./Reward";
import { Tag } from "./Tag";
import { User } from "./User";

export class Startup {
    id: number;
    header: string;
    content: string;
    author: User;
    achievements: Array<Achievement>;
    tags: Array<Tag>;
    moneyNeeded: number;
    moneyColected: number;
    rewards: Reward[];
    

}