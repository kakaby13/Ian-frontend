import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/News';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  constructor() { 
    let curentUserId = 6;
    let isCurentUserAdmin = false;

    this.user ={
      email: "qweqw@gmail.com",
      id: 5,
      isAdmin: isCurentUserAdmin,
      money: 555,
      name: "Foo"
    }

    this.isEdit = this.user.isAdmin || this.user.id == curentUserId;
  }

  user: User;
  isEdit: boolean;

  ngOnInit(): void {
  }

}
