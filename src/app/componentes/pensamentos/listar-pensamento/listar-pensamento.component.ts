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
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tortor et dui pellentesque feugiat. Proin placerat nisi ac laoreet mollis. Donec in eleifend neque. Phasellus scelerisque est auctor convallis faucibus. Quisque pharetra mauris neque. Nullam felis mi, hendrerit quis quam ut, pretium semper nulla. Sed hendrerit, orci eget imperdiet condimentum, dui ligula lacinia ligula, in volutpat nisl nunc sed neque. Sed velit felis, tempus vel accumsan eget, consectetur quis arcu. Sed vel ullamcorper nisi. Mauris vitae nisi rhoncus, pharetra leo quis, volutpat massa. ',
      autoria: 'Tiago',
      modelo: 'modelo1'
    }

  ];

}
