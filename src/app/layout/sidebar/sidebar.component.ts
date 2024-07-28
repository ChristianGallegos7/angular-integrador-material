import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';


const ANGULAR_MATERIAL = [MatSidenavModule, RouterModule, MatListModule,];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ANGULAR_MATERIAL],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor() { }

  
}
