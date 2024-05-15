import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrl: './pais-list.component.css'
})
export class PaisListComponent implements OnInit {
  paises: Array<Pais> = [];
  selected: boolean = false;
  selectedPais!: Pais;

  constructor(private paisService: PaisService) { }
  getPaises(): void {
    this.paisService.getPaises().subscribe({next: apiData => this.paises = apiData , error: e => console.error(e)});
  }
  ngOnInit() {
    this.getPaises();
  }
  onSelected(pais: Pais): void {
    this.selected = true;
    this.selectedPais = pais;
  }

}
