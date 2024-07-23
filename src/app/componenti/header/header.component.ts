import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  toggleNavbar() {
    const navbar = document.getElementById('backgroundImageExample');
    if (navbar) {
      navbar.classList.toggle('show');
    }
  }
}
