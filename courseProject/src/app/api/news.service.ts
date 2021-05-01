import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { News } from "../models/News";
import { Helper } from "./foo";


@Injectable()
export class NewsService {
    constructor(
        private readonly router: Router,
    ) {
    }

    public GetNews(): News[] {
        
        return Helper.GetNews();
    }

}