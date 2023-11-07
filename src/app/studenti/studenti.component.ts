import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent {
  @Input() listaStudenti: any = [];
  @Input() classeCard: any = "";
  @Input() classeClick: any = "";

  classePremi:number=0;

  @Output() sendPremi = new EventEmitter();

  getList(classe:any){
    this.classePremi=0;
    this.classePremi=calcola(classe);
  }

  inviaPremi(lista:any){
    this.getList(lista);
    this.sendPremi.emit(this.classePremi);
  }
}

function calcola(classe:any) {
  let cnt:any=0;
  classe.forEach((element: { premi: any; }) => {
    cnt += element.premi
  });
  return cnt;
}
