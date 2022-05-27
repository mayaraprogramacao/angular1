import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario/funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarTodos(): Funcionario[]{
    const funcionarios = localStorage['funcionarios'];
    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  cadastrar(funcionario : Funcionario):void{
    const funcionarios = this.listarTodos();
    funcionario.id = new Date().getTime();
    funcionarios.push(funcionario);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  buscarPorId(id:number): Funcionario{
    const funcionarios: Funcionario[] = this.listarTodos();
    return funcionarios.find(funcionario => funcionario.id === id);
  }
}
