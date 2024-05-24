import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  users: any = [];
  id: string = '';
  team: string = '';
  user: string = '';

  constructor(public usersService: UsersService) {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  registryUser() {
    let obj = {
      name: this.user,
      team: this.team,
    };

    this.usersService.createUser(obj).subscribe((res) => {
      this.getUsers();

      this.user = '';
      this.team = '';
    });
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe((res) => {
      this.getUsers();
    });
  }
}
