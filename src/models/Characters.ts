import { Wand } from './Wand';

export class Character {
    constructor(
        public actor: string,
        public alive: boolean,
        public ancestry: string,
        public dateOfBirth: string,
        public eyeColour: string,
        public gender: string,
        public hairColour: string,
        public hogwartsStaff: boolean,
        public hogwartsStudent: boolean,
        public house: string,
        public image: string,
        public name: string,
        public patronus: string,
        public species: string,
        public wand: Wand,
        public yearOfBirth: number,
    ) { }
}