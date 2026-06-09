import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Character } from '../../model/character';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService,
    private _location: Location
  ) {}
  
  ngOnInit(): void {
    // Evaluamos la ruta y lanzamos directamente el método correspondiente
    if (this._location.path() === '/filtro/multirol') {
      this.filterByRoles();
    } else {
      this.loadAll();
    }
  }

  public loadAll(): void {
    // Nos suscribimos directamente al flujo de datos del servicio
    this._characterService.getCharacters().subscribe((result: Character[]) => {
      this.characters = result;
    });
  }

  public filterByRoles(): void {
    // Nos suscribimos directamente al flujo de datos filtrado
    this._characterService.getCharacterByRoles().subscribe((result: Character[]) => {
      this.characters = result;
    });
  }

}