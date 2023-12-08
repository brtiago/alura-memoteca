import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {

  @Input() pensamento = {
    conteudo: 'I love angular',
    autoria: 'Tiago',
    modelo: 'modelo3'
  }

}
