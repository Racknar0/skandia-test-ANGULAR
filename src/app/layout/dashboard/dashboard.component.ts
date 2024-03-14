import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ShowDinamicService } from '../../core/services/show-dinamic.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  // @ViewChild('sidenav') sidenav: MatSidenav;

  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  showDinamycComponent: any;

  constructor(private showDinamicService: ShowDinamicService) {
    this.showDinamicService.isExpanded.subscribe({
      next: (value) => {
        console.log('value', value);
        this.showDinamycComponent = value;
      },
    })
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }


}
