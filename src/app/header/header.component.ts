import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes'])
  }
  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      height: '450px'});
  }
  openHome() {
    this.router.navigate([''])
  }
}