export interface CarSearch {
  modelo?: string
  cor?: string
  ano?: Number
  descricao?: string
  quantidadePassageiros?: Number
  'acessorios.descricao'?: string
  offset?:string
  limit?:string
}