import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss'
})
export class PensamentoComponent {

  pensamento = {
    conteudo: 'I love angular',
    autoria: 'Tiago',
    modelo: 'modelo3'
  }

}
