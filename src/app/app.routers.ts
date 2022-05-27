import { Routes } from "@angular/router";
import { ListarFuncionarioComponent } from "./listar-funcionario/listar-funcionario.component";


export const ROUTERS: Routes =[
{
    path: 'funcionarios/listar',
    component:ListarFuncionarioComponent
}
 
]