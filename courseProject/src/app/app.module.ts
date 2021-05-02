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
import { TagListComponent } from './pages/tag-list/tag-list.component';
import { TagService } from './api/tag.service';
import { MainMenuAccountComponent } from './pages/main-menu-account/main-menu-account.component';
import { CurentUserProvider } from './services/CurentUserProvider';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SinginComponent } from './pages/singin/singin.component';
import { AuthService } from './api/auth.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes =[
  {path: '', component: NewsTableComponent},
  {path: 'account/:userId', component: UserAccountComponent},
  {path: 'account', component: UserAccountComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Signin', component: SinginComponent},
  {path: 'startup/:id', component: StartupComponent},

]

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
     AchievementsListComponent,
     TagListComponent,
     MainMenuAccountComponent,
     LoginComponent,
     SinginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    CurentUserProvider,
    NewsService,
    UrlProvider,
    TagService,
    AchievementService,
    StartupService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
