import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Livro } from 'src/app/domain/livro';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alterar-livro-page',
  templateUrl: './alterar-livro-page.component.html',
  styleUrls: ['./alterar-livro-page.component.css']
})
export class AlterarLivroPageComponent implements OnInit {

  public id = this.activatedRoute.snapshot.paramMap.get('id');

  public livro: Livro;

  public formulario: FormGroup;


  constructor(private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private router : Router) { }

  ngOnInit(): void {

    this.httpClient
    .get(`http://localhost:8080/livro/${this.id}`)
    .subscribe((resp: Livro) => {
      this.livro = resp;

      this.formulario = this.formBuilder.group({
        nome: [this.livro.nome, [
          Validators.required,
        ]],
        preco: [this.livro.preco, [
          Validators.required
        ]]
        
      })
    })

    this.formulario = this.formBuilder.group({
      nome: [null, [
        Validators.required,
      ]],
      preco: [null, [
        Validators.required
      ]]
      
    })
    
    
  }

  submitForm(){

    this.livro.nome = this.formulario.value.nome;
    this.livro.preco = this.formulario.value.preco;

    this.httpClient
    .put(`http://localhost:8080/livro/${this.id}`, this.livro)
    .subscribe((resp: Livro) => {
      this.router.navigate(['home']);
    })

  }

}
