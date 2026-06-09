import { Component, OnInit } from '@angular/core';
import { Character } from '../../model/character';
import { CharacterService } from '../../services/character-service';

@Component({
  selector: 'app-character-tank',
  imports: [],
  templateUrl: './character-tank.html',
  styleUrl: './character-tank.css',
})
export class CharacterTank implements OnInit {

  public characters: Character[] = [];

  constructor(private _CharacterService: CharacterService) {}

  ngOnInit(): void {

    this._CharacterService.getCharacterByRolesTank().subscribe(data => {

      this.characters = data;

    })

  }

}
