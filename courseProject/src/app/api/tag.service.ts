import { Injectable } from "@angular/core";
import { Tag } from "../models/Tag";

@Injectable()
export class TagService {
    public GetTagsByPart(startOfTag: string) : Tag[] {
        return [];
    }

    public SaveTagIfNotExist(tag: string, startupId: number) {
        
    }
}