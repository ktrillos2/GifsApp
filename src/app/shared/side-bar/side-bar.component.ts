import { Component } from '@angular/core';
import { GifsService } from '../../gifsmodule/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  constructor(private gifsService:GifsService) { }

  get historial() {
    return this.gifsService.historial
  }

  buscar(termino : string) {
    this.gifsService.buscarGifs(termino)
  }


}
