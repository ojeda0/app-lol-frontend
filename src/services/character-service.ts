import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  
  private _baseUrl: string = "http://localhost:8080/api"

  private characterPuente = new BehaviorSubject<Character[]>([]);
  public characterPuente$ = this.characterPuente.asObservable();

  constructor(
    private _http: HttpClient
  ){};

  public getCharacters(): void {
    this._http.get<Character[]>(this._baseUrl + "/characters").subscribe(result => {
      this.characterPuente.next(result);
    });
  }

  public getCharacterById(id: string): Observable<Character> {
    return this._http.get<Character>(this._baseUrl + "/characters/" + id);
  }

  public getCharacterByRoles(): void {
    this._http.get<Character[]>(this._baseUrl + "/characters/filtro/multirol").subscribe(result => {
      this.characterPuente.next(result);
    });
  }

}