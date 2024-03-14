import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-section-dinamyc',
  templateUrl: './section-dinamyc.component.html',
  styleUrl: './section-dinamyc.component.scss'
})
export class SectionDinamycComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    dots: true,
    lazyLoad: true,
    navSpeed: 700,
    navText: ['<img src="/assets/icons/chevron-left.svg" />', '<img src="/assets/icons/chevron-right.svg" />'],

    responsive: {
      0: {
        items: 1,
        margin: 40
      },
    },
    nav: true
  };
}
