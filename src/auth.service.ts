import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isAuthenticated() {
    // pega o token cadastro
    const token = localStorage.getItem('objetoLogin');

    // checa se existe token
    if (token) {
        return true;
    }

    return false;
  }
}
