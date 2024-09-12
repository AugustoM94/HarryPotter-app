import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from '../../src/app/componenti/characters/characters.component';
import { SidebarComponent } from './componenti/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      { path: 'characters', component: CharactersComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
