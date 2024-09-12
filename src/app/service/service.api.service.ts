import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../../models/Characters';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }
}
