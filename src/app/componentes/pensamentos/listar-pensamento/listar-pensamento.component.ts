import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss'
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I love angular',
      autoria: 'Tiago',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love java',
      autoria: 'Tiago',
      modelo: 'modelo2'
    }
  ];

}
