import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  produto: string = "";
  produtos:string[] = [];
  menuType:string = "admin";

  constructor(){
    this.produtos = ["mouse","teclado","mousepad","gabinete"]
  }
  ngOnInit(): void {
      
  }
  AdicionarProduto(){
    // let input = document.getElementById(id);
    // let produto = input.value;
    // var inputValue = (<HTMLInputElement>document.getElementById(id)).value;
    this.produtos.push(this.produto);
  }
  RemoverProduto(index: number){
    alert(this.produtos[index] + " será removido")
    this.produtos.splice(index, 1);
  }
}
