import { CorreioService } from './../../services/correio.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private correio: CorreioService) {}

  //NX598805383BR

  localizarObjeto(evento){
    let codigoObjeto = evento.detail.value;

    this.correio.localizarObjeto(codigoObjeto)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })

  }
}
