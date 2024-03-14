import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ShowDinamicService } from '../../../../core/services/show-dinamic.service';
import { LoaderService } from '../../../../core/services/loader.service';
import { CardsServiceService } from '../../../../core/services/cards-service.service';
import { CardI } from '../../../../interfaces/card.interface';
import { Store } from '@ngrx/store';
import { DashboardActions } from '../../../../redux-store/dashboard/dashboard.actions';
import { selectDashboardData } from '../../../../redux-store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-section-slider',
  templateUrl: './section-slider.component.html',
  styleUrls: ['./section-slider.component.scss'],
})
export class SectionSliderComponent implements OnInit {
  width: number = 0;
  listCards: CardI[] = [];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    autoplay: false,
    dots: false,
    lazyLoad: true,
    navSpeed: 700,
    navText: [
      '<img src="/assets/icons/chevron-left.svg" />',
      '<img src="/assets/icons/chevron-right.svg" />',
    ],

    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      400: {
        items: 2,
        margin: 40,
      },
      600: {
        items: 3,
        margin: 40,
      },
      800: {
        items: 4,
        margin: 40,
      },
    },
    nav: true,
  };

  constructor(
    private elementRef: ElementRef,
    private showDinamicService: ShowDinamicService,
    private loadingService: LoaderService,
    private cardsService: CardsServiceService,
    private store: Store
  ) {}

  ngAfterViewInit() {
    this.updateResponsive();
    window.addEventListener('resize', this.updateResponsive.bind(this));
  }

  ngOnInit(): void {
    this.loadingService.setIsLoading(true);
    this.cardsService.getCards().subscribe({
      next: (value) => {
        this.store.dispatch(DashboardActions.setDashboardData({ data: value }));
        this.store.select(selectDashboardData).subscribe({
          next: (value) => {
            console.log('value of select', value);
            this.listCards = value?.listCard;
            this.pushData(this.listCards);
          },
        })
        this.loadingService.setIsLoading(false);
      },
    });
  }

  pushData(array: CardI[] = []) {
    // Array de rutas de imágenes predefinidas
    const srcImg1 = 'assets/icons/happy-card.svg';
    const srcImg2 = 'assets/icons/trofeo-card.svg';
    const srcImg3 = 'assets/icons/hand-hearth-card.svg';

    // Crear una copia modificada de cada objeto CardI y agregar la propiedad srcImg
    const newArray = array.map((element: CardI, index) => {
      let srcImg;
      switch (index) {
        case 0:
          srcImg = srcImg1;
          break;
        case 1:
          srcImg = srcImg2;
          break;
        case 2:
          srcImg = srcImg3;
          break;
        case 3:
          srcImg = srcImg1;
          break;
        default:
          srcImg = '';
          break;
      }
      // Devolver un nuevo objeto con la propiedad srcImg agregada
      return { ...element, srcImg };
    });

    // Imprimir el nuevo array en la consola
    console.log('newArray', newArray);

    // Asignar el nuevo array al listCards
    this.listCards = newArray;
  }

  updateResponsive() {
    const sliderContainerWidth = this.elementRef.nativeElement.offsetWidth;

    const newResponsive = {
      0: { items: sliderContainerWidth / 430 },
      800: { items: sliderContainerWidth / 400 },
      1300: { items: sliderContainerWidth / 380 },
    };
    this.customOptions = {
      ...this.customOptions,
      responsive: newResponsive,
    };
  }

  showDinamycComponentChange() {
    this.showDinamicService.changeDinamycComponent(true);
  }
}
