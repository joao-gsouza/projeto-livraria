import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { InserirLivroPageComponent } from './page/inserir-livro-page/inserir-livro-page.component';
import { AlterarLivroPageComponent } from './page/alterar-livro-page/alterar-livro-page.component';


const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'inserir-livro', component: InserirLivroPageComponent},
  {path: 'alterar-livro/:id', component: AlterarLivroPageComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }