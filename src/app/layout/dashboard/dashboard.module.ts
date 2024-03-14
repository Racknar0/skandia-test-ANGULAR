import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { SkyComponent } from './components/sky/sky.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SectionSliderModule } from './components/section-slider/section-slider.module';
import { SectionDinamycModule } from './components/section-dinamyc/section-dinamyc.module';
import { FooterComponent } from './components/footer/footer.component';




@NgModule({
  declarations: [
    DashboardComponent,
    MenuItemsComponent,
    SkyComponent,
    MainCardComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    SectionSliderModule,
    SectionDinamycModule
  ]
})
export class DashboardModule { }
