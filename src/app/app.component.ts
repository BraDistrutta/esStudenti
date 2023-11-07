import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esStudenti';
  classi = {};

  protected readonly JSON = JSON;

  async ngOnInit() {
    let response = await fetch('https://regel.mauroracca.repl.co/');
    let ses = await response.json();
    console.log(ses);
    this.classi = ses;
    //this.inviaClassi();
  }
  /*
  @Output() sendClassi = new EventEmitter();

  inviaClassi(){
    this.sendClassi.emit(this.classi);
  }
  */
}
