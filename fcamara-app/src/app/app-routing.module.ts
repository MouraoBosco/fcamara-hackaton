import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { DoacaoComponent } from './components/doacao/doacao.component';
import { EscolasComponent } from './components/escolas/escolas.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'main', component: MainComponent},
  {path:'about', component: AboutComponent},
  {path:'cadastro', component: CadastroComponent},
  {path:'escolas', component: EscolasComponent},
  {path:'doacao', component: DoacaoComponent},
  {path:'', component: MainComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
