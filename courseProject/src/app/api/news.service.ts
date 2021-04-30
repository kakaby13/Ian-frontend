import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { News } from "../models/News";


@Injectable()
export class NewsService {
    constructor(
        private readonly router: Router,
    ) {
    }

    public GetNews(): News[] {
        let foo: News = 
        {
          id: 13,
          author: 'Автор',
          content: 'Контент новости',
          header: 'Заголовок'
        }
        return [foo,foo,foo,foo,foo,foo,foo,foo,foo];
    }

}