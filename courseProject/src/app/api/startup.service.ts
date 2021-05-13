import { Injectable } from "@angular/core";
import { Startup } from "../models/Startup";
import { HttpClient } from '@angular/common/http';
import { UrlProvider } from "./router";

@Injectable()
export class StartupService {

    controllerUrl: string = 'startup'

    constructor(
        private readonly http: HttpClient,
    ) {
    }

    public Save(startup: Startup) {
        this.http.post(UrlProvider.host + this.controllerUrl + '/save', startup).toPromise();
    }

    public GetAllStartups(): Promise<Startup[]> {
        return this.http.get<Startup[]>(UrlProvider.host + this.controllerUrl + '/getAllStartups').toPromise();    
    }

    public GetStartupById(id: number): Promise<Startup> {
        return this.http.get<Startup>(UrlProvider.host + this.controllerUrl + '/getStartupById',{
            params: {
              id: id.toString()
            }
        }).toPromise();    
    }

    public GetSturtupsCreatedByUser(id: number): Promise<Startup[]> {
        return this.http.get<Startup[]>(UrlProvider.host + this.controllerUrl + '/getSturtupsCreatedByUser',{
            params: {
              id: id.toString()
            }
        }).toPromise();    
    }

    public GetSturtupsFinancedByUser(id: number): Promise<Startup[]> {
        return this.http.get<Startup[]>(UrlProvider.host + this.controllerUrl + '/getSturtupsFinancedByUser',{
            params: {
              id: id.toString()
            }
        }).toPromise();  
    }

    public GetStartupsByTag(tag: string): Promise<Startup[]> {
        return this.http.get<Startup[]>(UrlProvider.host + this.controllerUrl + '/getStartupsByTag',{
            params: {
                tag: tag
            }
        }).toPromise(); 
    }
}