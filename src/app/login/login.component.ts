import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin;
  valoresForm: Object;
  valoresAcesso: Object;
  conversao;
  conversao2;
  getCadastro;
  emailAcesso;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog) { 
      console.log()
    }
    

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: [''],
      password: ['']
    });
    console.log(this.valoresForm);
    this.formLogin.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
    this.emailAcesso = this.fb.group({
      email: ['dwu@dwu.com.br'],
      password: ['DWU@2020']
    });
    console.log(this.valoresAcesso);
    this.emailAcesso.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
      console.log(res);
      this.valoresAcesso = res;
      });
    }
  
  objetoLogin() {
    console.log(this.formLogin.controls);
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('objetoLogin', this.conversao);

    const acesso = this.formLogin.get('email', 'senha').value;
    const confirmarAcesso = this.emailAcesso.get('email', 'senha').value;
      if (acesso === confirmarAcesso) {
        this.router.navigate(['cadastro-clientes']); this.dialog.closeAll()
      } else {          
        this.router.navigate(['acesso-negado'])};
  }
}

