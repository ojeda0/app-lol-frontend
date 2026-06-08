import { Component } from '@angular/core';
import { CharacterService } from '../../services/character-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  constructor(
      private _characterService: CharacterService,
      private _router: Router
    ){};

  public loadAll(): void {
    this._router.navigate(['/inicio']);
    this._characterService.getCharacters();
  }

  public filterByRoles(): void {
    this._router.navigate(['/filtro/multirol']);
    this._characterService.getCharacterByRoles();
  }

}