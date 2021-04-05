import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { EscolasComponent } from './components/escolas/escolas.component';
import { MainComponent } from './components/main/main.component';
import { CadastroSucessoComponent } from './components/cadastro-sucesso/cadastro-sucesso.component';
import { DoacaoPagamentoComponent } from './components/doacao-pagamento/doacao-pagamento.component';

const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'about', component: AboutComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'escolas', component: EscolasComponent},
  {path:'doacao', component: DoacaoComponent},
  {path:'', component: MainComponent},
  {path:'cadastro-sucesso', component: CadastroSucessoComponent},
  {path:'doacao-pagamento', component: DoacaoPagamentoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
