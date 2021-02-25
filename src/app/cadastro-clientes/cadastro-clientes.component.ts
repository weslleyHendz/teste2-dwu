import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro;
  valoresForm: Object;
  conversao;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { }
    
  ngOnInit() {
    this.formCadastro = this.fb.group({
      data: [''],
      horario: [''],
      alfanumerico: [''],
      numero: [''],
      texto: [''],
      radio:[''],
      checkbox0: [''],
      checkbox1: [''],
      checkbox2: ['']
    });
    console.log(this.valoresForm);
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000))
      .subscribe(res => {
        console.log(res);
        this.valoresForm = res;
      });
  }
  
  objetoCadastro() {
    console.log(this.formCadastro.controls);
    this.conversao = JSON.stringify(this.valoresForm);
    localStorage.setItem('objetoCadastro', this.conversao);
    this.router.navigate(['/cadastro-clientes']);

  }
  verificaCadastro() {
    setTimeout(() => {
      if (localStorage.getItem('objetoCadastro')) {
        // TODO REDIRECIIONAR PARA PAGINA DE CADASTRO CONCLUIDO
        this.router.navigate(['']);
      } else {
        return false;
      }
    }, 200);
  }
    resetForm()  {
      this.formCadastro = this.fb.group({
        data: [''],
        horario: [''],
        alfanumerico: [''],
        numero: [''],
        texto: [''],
        radio:[''],
        checkbox: ['']
      });
    }
}  