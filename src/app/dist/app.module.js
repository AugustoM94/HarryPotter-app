"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var header_component_1 = require("./componenti/header/header.component");
var icon_1 = require("@angular/material/icon");
var animations_1 = require("@angular/platform-browser/animations");
var sidenav_1 = require("@angular/material/sidenav");
var sidebar_component_1 = require("./componenti/sidebar/sidebar.component");
var list_1 = require("@angular/material/list");
var angular_svg_icon_1 = require("angular-svg-icon");
var characters_component_1 = require("./componenti/characters/characters.component");
var card_1 = require("@angular/material/card");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                sidebar_component_1.SidebarComponent,
                characters_component_1.CharactersComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule,
                icon_1.MatIconModule,
                animations_1.BrowserAnimationsModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                angular_svg_icon_1.AngularSvgIconModule,
                card_1.MatCardModule,
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent, header_component_1.HeaderComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
