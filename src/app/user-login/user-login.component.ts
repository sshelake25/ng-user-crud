import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input() error: string | null | undefined;
  @Output() submitEM = new EventEmitter();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.userSrv.login(this.form.value)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/')
        });

  }

}
