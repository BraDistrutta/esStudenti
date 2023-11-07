import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'classi',
  templateUrl: './classi.component.html',
  styleUrls: ['./classi.component.css']
})
export class ClassiComponent {
  classi:any;
  vet:any = [];
  classe:any = "";
  nPremi:number = 0;

  ngOnInit() {
    fetch('https://regel.mauroracca.repl.co/').then(response => response.json()).then(data => {
      this.classi = data;
      console.log(this.classi);
    })
  }

  showClasse(classe: any){
    this.vet.splice(0, this.vet.length);
    for(let i = 0; i < this.classi[classe].length; i++){
      this.vet.push(this.classi[classe][i]);
    }
    this.classe = classe;
  }

  calcolaPremi(premi:any){
    this.nPremi = 0;
    this.nPremi = premi;
  }

}
