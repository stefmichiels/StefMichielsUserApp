import { User } from '../user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  constructor(private userService : UserService) { }

  updateUserData(): void{
    this.setFirstName(this.user)
    this.setLastName(this.user)
  }
  setFirstName(user : User): void{
    this.userService.setFirstName(user)
  }

  setLastName(user:User): void{
    this.userService.setLastName(user)
  }

  ngOnInit() {
  }

}
