"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CharactersComponent = void 0;
var core_1 = require("@angular/core");
var CharactersComponent = /** @class */ (function () {
    function CharactersComponent(serviceApiService) {
        this.serviceApiService = serviceApiService;
        this.characters = []; // Inizializzo un array di oggetti Character
    }
    CharactersComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    CharactersComponent.prototype.getCharacters = function () {
        var _this = this;
        this.serviceApiService.getCharacters().subscribe({
            next: function (data) { return _this.characters = data; },
            error: function (error) { return console.error('Error fetching characters', error); },
            complete: function () { return console.log('Character fetching complete.'); } // Al termine della chiamata, loggo che il recupero è completo
        });
    };
    CharactersComponent = __decorate([
        core_1.Component({
            selector: 'app-characters',
            templateUrl: './characters.component.html',
            styleUrls: ['./characters.component.css']
        })
    ], CharactersComponent);
    return CharactersComponent;
}());
exports.CharactersComponent = CharactersComponent;
