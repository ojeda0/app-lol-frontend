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
    if (this._location.path() === '/filtro/multirol') {
      this.filterByRoles();
    } else {
      this.loadAll();
    }
  }

  public loadAll(): void {
    this._characterService.getCharacters().subscribe((result: Character[]) => {
      this.characters = result;
    });
  }

  public filterByRoles(): void {
    this._characterService.getCharacterByRoles().subscribe((result: Character[]) => {
      this.characters = result;
    });
  }

}