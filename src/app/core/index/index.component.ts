import { CompaniesService } from './../../services/companies.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  users: any = [];

  constructor(public companiesService: CompaniesService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  createRandomCompany() {
    let obj = {};

    this.companiesService.createRandomCompany(obj).subscribe((res) => {
      this.getCompanies();
    });
  }

  deleteCompany(id: string) {
    this.companiesService.deleteCompany(id).subscribe((res) => {
      this.getCompanies();
    });
  }
}
