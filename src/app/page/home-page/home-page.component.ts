import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Livro } from 'src/app/domain/livro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public livros: Array<Livro>;

  constructor(private httpCliente: HttpClient,
    private router : Router) { }

  ngOnInit(): void {

    this.httpCliente
    .get('http://localhost:8080/livro')
    .subscribe((resp: Array<Livro>) =>{
      this.livros = resp;
    })

  }

  onClickEditar(id: number){
    this.router.navigate(['alterar-livro', id]);
  }

  onClickRemover(id: number){
    console.log('Remover');
  }

}
