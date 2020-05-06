import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() { }
  @ViewChild("elem1", {read: ElementRef}) elem1: ElementRef;
  ngOnInit(): void {
  }
  fondCarte="../assets/imgs/cartes/fondcarte.png";
  nbChoix=0;
  ids={'id1':0, 'id2':0};
  ctrlCarte(id){
   if (this.nbChoix==1) {
    this.ids.id2=id;
    // console.log(this.elem1.nativeElement.childNodes[0].src);
    
    this.controlePaire(this.ids);
    this.nbChoix =0;  
   }
   else {
    this.ids.id1=id;
    this.nbChoix +=1;
   }
  //  console.log('id',id,'ids',this.ids);
   
  }

  controlePaire(ids){
    // console.log(ids);
    
  }

}
