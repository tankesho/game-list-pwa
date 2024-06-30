import { Component, OnInit } from '@angular/core';
import { WebStorageUtil } from '../util/web-storage-util';
import { User } from '../model/user';
import { Constants } from '../util/constants';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users!: User[];
  loginUser!: User;
  constructor(
    private loginService: LoginService,
    private userService: UserService) {}

  ngOnInit(): void {
    this.loginUser = new User(0, '', '');
    this.users = this.userService.getUsers();
  }

  onLogin() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.loginUser.username == this.users[i].username) {
        if (this.loginUser.password == this.users[i].password)
          this.loginService.login(this.users[i]);
          return;
      } else {
        alert(
          'Oppsss! Por favor, verifique seu nome de usuário ou senha e tente novamente!'
        );
      }
    }
  }
}
