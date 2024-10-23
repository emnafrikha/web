import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {constructor( private router: Router) { }
goToHome() {
  this.router.navigate(['/home']);
}
goToaboutus() {
  this.router.navigate(['/about-us']);
}
goTonewevents() {
  this.router.navigate(['/new-events']);
}


}
