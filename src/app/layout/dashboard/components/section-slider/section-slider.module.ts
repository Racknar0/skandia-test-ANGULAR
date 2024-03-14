import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSliderComponent } from './section-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    SectionSliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    SectionSliderComponent
  ]
})
export class SectionSliderModule { }
