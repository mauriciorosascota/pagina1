import { CompaniesService } from './../../services/companies.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  users: any = [];

  constructor(public companiesService: CompaniesService, public usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res) => {
      console.log(res)
      this.users = res;
    });
  }


  deleteCompany(id: string) {
    this.usersService.deleteUser(id).subscribe((res) => {
      this.getUsers();
    });
  }
}
