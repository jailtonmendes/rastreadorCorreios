import { CorreioService } from './../../services/correio.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventosCollection: any[] = [];

  constructor(private correioService: CorreioService, public toastController: ToastController) {}

  //NX598805383BR
  
  localizarObjeto(evento){
    let codigoObjeto = evento.detail.value;

    this.correioService.localizarObjeto(codigoObjeto)
    .then(response => {

      if(this.eventosCollection==undefined) {
        this.enviarToast('Objeto não encontrado');
      }

      let correio : any = response;

      this.eventosCollection = correio.objetos[0].eventos;

    })
    .catch(error => {
      console.log(error)
    })

  }

  async enviarToast(mensagem : string) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000
    });
    toast.present();
  }



}
