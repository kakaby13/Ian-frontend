import { Injectable } from "@angular/core";
import { Tag } from "../models/Tag";
import { HttpClient } from '@angular/common/http';
import { UrlProvider } from "./router";

@Injectable()
export class TagService {

    controllerUrl: string = 'tag'

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public GetTagsByPart(startOfTag: string) : Promise<Tag[]> {
        return this.http.get<Tag[]>(UrlProvider.host + this.controllerUrl + '/getTagsByPart',{
            params: {
                startOfTag: startOfTag
            }
        }).toPromise();
    }

    public SaveTagIfNotExist(tag: string, startupId: number) {
        return this.http.get(UrlProvider.host + this.controllerUrl + '/saveTagIfNotExist',{
            params: {
                tag: tag,
                startupId: startupId.toString()
            }
        }).toPromise();
    }

    public DeleteTag(tag: string, startupId: number) {
        return this.http.get(UrlProvider.host + this.controllerUrl + '/deleteTag',{
            params: {
                tag: tag,
                startupId: startupId.toString()
            }
        }).toPromise();
    }
}