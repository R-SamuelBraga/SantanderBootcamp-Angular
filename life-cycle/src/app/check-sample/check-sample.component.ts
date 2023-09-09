import { 
  Component, 
  DoCheck, 
  OnInit, 
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent implements  DoCheck, 
                                              OnInit, 
                                              AfterContentChecked,
                                              AfterContentInit,
                                              AfterViewChecked,
                                              AfterViewInit,
                                              OnDestroy 
{

  quantidade: number = 0;

  constructor(){}
  ngOnDestroy(): void {
    console.log("goodByeMyFriend")
  }

  adicionar(){
    this.quantidade ++;
  }
  decrementar(){
    this.quantidade --;
  }
  ngOnInit(): void {
    console.log("ngOnInit ")
  }

  ngDoCheck(): void {
      console.log("ngDocheck")
  }
  ngAfterContentChecked(): void {
      console.log('AfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit')
  }
  ngAfterViewChecked(): void {
    console.log('AfterViewChecked')
  }
  ngAfterViewInit(): void {
    console.log('AfterViewInit')
  }
  
}
