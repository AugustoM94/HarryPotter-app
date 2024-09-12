import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../../service/service.api.service';



// Definisco l'interfaccia per le bacchette (Wand) 
interface Wand {
  wood: string;
  core: string;
  length: number;
}

// Definisco l'interfaccia per i personaggi (Character)
interface Character {
  actor: string;
  alive: boolean;
  ancestry: string;
  dateOfBirth: string;
  eyeColour: string;
  gender: string;
  hairColour: string;
  hogwartsStaff: boolean;
  hogwartsStudent: boolean;
  house: string;
  image: string;
  name: string;
  patronus: string;
  species: string;
  wand: Wand;
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = []; // Inizializzo un array di oggetti Character
  constructor(private serviceApiService: ServiceApiService) { }

  ngOnInit(): void {
    this.getCharacters();
  }
  getCharacters(): void { // Definisco un metodo per ottenere i personaggi
    this.serviceApiService.getCharacters().subscribe({ // Chiamo il servizio per ottenere i personaggi e mi iscrivo al risultato
      next: (data) => this.characters = data, // Quando i dati sono disponibili, li assegno all'array characters
      error: (error) => console.error('Error fetching characters', error), // Se c'è un errore, lo loggo nella console
      complete: () => console.log('Character fetching complete.') // Al termine della chiamata, loggo che il recupero è completo
    });
  }

}
