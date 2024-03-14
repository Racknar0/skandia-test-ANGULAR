import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDinamycComponent } from './section-dinamyc.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    SectionDinamycComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    SectionDinamycComponent,
    CarouselModule
  ]
})
export class SectionDinamycModule { }
