import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { NewsTableComponent } from './pages/news-table/news-table.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { NewsItemComponent } from './pages/news-item/news-item.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { UrlProvider } from './api/router';
import { NewsService } from './api/news.service';
import { AchievementService } from './api/achievement.service';
import { StartupService } from './api/startup.service';
import { UserService } from './api/user.service';
import { StartupTableComponentComponent } from './pages/startup-table-component/startup-table-component.component';
import { StartupTableItemComponentComponent } from './pages/startup-table-item-component/startup-table-item-component.component';
import { StartupComponent } from './pages/startup/startup.component';
import { AchievementsListComponent } from './pages/achievements-list/achievements-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    NewsTableComponent,
    UserAccountComponent,
    NewsItemComponent,
    AchievementsComponent,
     StartupTableComponentComponent,
     StartupTableItemComponentComponent,
     StartupComponent,
     AchievementsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    NewsService,
    UrlProvider,
    AchievementService,
    StartupService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
