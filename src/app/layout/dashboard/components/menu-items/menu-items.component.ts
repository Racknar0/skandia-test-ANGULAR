import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.scss'
})
export class MenuItemsComponent {
/*

    [isExpanded]="isExpanded"
    [showSubmenu]="showSubmenu"
    [isShowing]="isShowing"
    [showSubSubMenu]="showSubSubMenu"
*/

  @Input() isExpanded: any;
  @Input() showSubmenu: any;
  @Input() isShowing: any;
  @Input() showSubSubMenu: any;
}
