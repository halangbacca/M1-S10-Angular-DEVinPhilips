import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent {
  lista: string[] = ['Todos', 'Não lidos', 'Lidos'];

  @Output() clique = new EventEmitter<string>();

  onClick(event: any) {
    this.clique.emit(event);
  }
}
