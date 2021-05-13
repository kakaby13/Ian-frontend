import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { News } from "../models/News";
import { UrlProvider } from "./router";

@Injectable()
export class NewsService {

    controllerUrl: string = 'news'

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public GetNews(): Promise<News[]> {
        
        return this.http.get<News[]>(UrlProvider.host + this.controllerUrl + '/getNews').toPromise();
    }

}