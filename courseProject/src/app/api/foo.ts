import { Injectable } from "@angular/core";
import { Achievement } from "../models/Achievement";
import { News } from "../models/News";
import { Startup } from "../models/Startup";
import { Tag } from "../models/Tag";
import { User } from "../models/User";

@Injectable()
export class Helper {
    static GetUserById(id: number): User {
        var user =  new User ();

        user.id = id;
        user.name = "Bob";
        user.email = "qwe@gmail.com";
        user.isAdmin = false;
        user.money = 555;
        
        return user;
    }

    static GetNews(): News[] {
        let foo: News = 
        {
          id: 13,
          author: 'Автор',
          content: 'Контент новости',
          header: 'Заголовок'
        }
        return [foo,foo,foo,foo,foo,foo,foo,foo,foo];
    }

    static GetRandomAchivements() :  Achievement[] {
        var ach = new  Achievement();
        ach.id = 123;
        ach.name = "ach name";

        return [ach,ach,ach,ach,ach,ach,ach,ach,ach];
    }

    static GetRandomListOfSturtups(): Startup[] {
        var startup = new Startup();

        startup.id = 1;
        startup.achievements = Helper.GetRandomAchivements();
        startup.tags = this.GetRandomTags();
        startup.author = Helper.GetUserById(1);
        startup.header = "Best startup inn the world"
        startup.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        
        return [startup,startup,startup,startup,startup];
    }

    static GetRandomTags(): Tag[] {
        let tag = new Tag();
        tag.text = "tag1";

        return [tag,tag,tag,tag,tag,tag,tag];
    }


}