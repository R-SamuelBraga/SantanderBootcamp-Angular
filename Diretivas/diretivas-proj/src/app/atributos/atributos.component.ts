import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit{
  estilo: string = "enable";
  corFundo: string = "blue";
  corDafonte: string = "yellow";
  item:string = "";
  items: string[] = [];
  isEnableBlock:boolean = true;

  constructor(){

  }
  ngOnInit(): void {
      
  }
  trocar(){
    if (this.estilo === "disable"){
      this.estilo = "enable";
    }else{
      this.estilo = "disable";
    }
  }
  AdicionarItem(){
    this.items.push(this.item)
  }
}
