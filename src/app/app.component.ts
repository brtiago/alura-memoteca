import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "./componentes/rodape/rodape.component";
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent]
})
export class AppComponent {
  title = 'memoteca';
}
