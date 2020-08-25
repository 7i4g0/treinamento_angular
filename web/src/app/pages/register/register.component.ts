import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrar(): void {
    // fazer uma chamada pra api
    // salvar um novo registro
    // se deu tudo, exibir um alert
    // aqui tb, redirecionar pra tela de login
    alert("Registro feito com sucesso!");
    this.router.navigateByUrl('/login');
  }

}
