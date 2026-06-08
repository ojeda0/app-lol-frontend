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
export class Home implements OnInit{

  public characters: Character[] = [];

  constructor(
    private _characterService: CharacterService,
    private _location: Location
  ){};
  
  ngOnInit(): void {
    this._characterService.characterPuente$.subscribe(result => {
      this.characters = result;
    });

    if (this._location.path() === '/filtro/multirol') {
      this._characterService.getCharacterByRoles();
    } else {
      this._characterService.getCharacters();
    }
  }

  public loadAll(): void {
    this._characterService.getCharacters();
  }

  public filterByRoles(): void {
    this._characterService.getCharacterByRoles();
  }

}