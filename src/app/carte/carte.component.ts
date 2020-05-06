import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fondCarte="../assets/imgs/cartes/fondcarte.png";
  etatsCartes=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
  nbPairesTrouvees=0;
  nbChoix=0;
  ids={'id1':0, 'id2':0};
  ctrlCarte(id){
   if (this.nbChoix==1) {
    this.ids.id2=id;
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
