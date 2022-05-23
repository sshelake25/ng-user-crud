import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {


  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    job: new FormControl(''),
  });

  constructor(private userSrv: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.userSrv.createUser(this.form.value)
      .subscribe(
        (res) => {
          this.router.navigateByUrl('/');
        });

  }

}
