import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { CurentUserProvider } from 'src/app/services/CurentUserProvider';

@Component({
  selector: 'app-main-menu-account',
  templateUrl: './main-menu-account.component.html',
  styleUrls: ['./main-menu-account.component.css']
})
export class MainMenuAccountComponent implements OnInit {

  @Input()
  user: User;
  isUserLoged: boolean;

  
  constructor(
    private readonly curentUserProvider: CurentUserProvider,
  ) {
    this.isUserLoged = this.curentUserProvider.IsUserLogedIn();
   }

  ngOnInit(): void {
    
  }

}
