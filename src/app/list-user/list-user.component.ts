import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'avatar', 'email', 'first_name', 'last_name', 'editAction', 'delAction'];
  dataSource: any;

  notificationMsg = '';

  constructor(private userSrv: UserService) {
  }

  ngOnInit(): void {
    this.userSrv.getUsers()
      .subscribe((result: any) => {
        this.dataSource = result['data'];
      });
  }

  deleteUser(userId: any) {
    this.userSrv.deleteUser(userId).subscribe(() => {
      this.notificationMsg = `User delete successfully ${userId}`;
    });
  }

}
