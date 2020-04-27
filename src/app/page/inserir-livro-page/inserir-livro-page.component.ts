import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from 'src/app/domain/categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Livro } from 'src/app/domain/livro';

@Component({
  selector: 'app-inserir-livro-page',
  templateUrl: './inserir-livro-page.component.html',
  styleUrls: ['./inserir-livro-page.component.css']
})
export class InserirLivroPageComponent implements OnInit {
  public categorias: Array<Categoria>;
  public formulario: FormGroup;

  constructor(private httpClient: HttpClient, 
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.formulario = this.formBuilder.group({
      codigo:[null, [
        Validators.required,
      ]],
      pagina: [null, [
        Validators.required
      ]],
      nome: [null, [
        Validators.required,
      ]],
      preco: [null, [
        Validators.required
      ]],
      categoria: [null, [
        Validators.required
      ]]
      
    })
    

    this.httpClient.get('http://localhost:8080/categoria').subscribe((resp: Array<Categoria>) =>{
      this.categorias=resp;
    })  
  }

  submitForm(): void{
    
    const livro: Livro = this.formulario.value;

    this.httpClient
    .post('http://localhost:8080/livro', livro)
    .subscribe((resp: Livro) =>{
      console.log(resp);
    })
  }

}
