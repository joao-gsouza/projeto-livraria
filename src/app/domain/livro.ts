import { Categoria } from './categoria';

export interface Livro{
    id: number;
    codigo: number;
    paginas: number;
    nome: string;
    preco: number;
    categoria: Categoria;
}