import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Singin } from 'src/app/models/Singin';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
  ) { }

  username: string;
  email: string;
  password: string;

  ngOnInit(): void {
  }

  public signin() {
    let singin = new Singin();

    singin.username = this.username;
    singin.email = this.email;
    singin.password = this.password;

    this.authService.Signin(singin);
  }
}
