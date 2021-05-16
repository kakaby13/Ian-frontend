import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/api/auth.service';
import { Login } from 'src/app/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly authService: AuthService,
  ) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  public login() {
    let login = new Login();

    login.username = this.username;
    login.password = this.password;

    this.authService.Login(login);
  }
}
