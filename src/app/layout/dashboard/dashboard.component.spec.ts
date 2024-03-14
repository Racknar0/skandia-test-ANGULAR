import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { SharedModule } from '../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { SkyComponent } from './components/sky/sky.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SectionSliderComponent } from './components/section-slider/section-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        MenuItemsComponent,
        SkyComponent,
        MainCardComponent,
        SectionSliderComponent,
        FooterComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        MatIconModule, // Import MatIconModule before SharedModule
        SharedModule,
        HttpClientModule,
        CarouselModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*

    isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  showDinamycComponent: any;

  mouseenter()
  */

  it('debe montarse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe tener una propiedad isExpanded', () => {
    expect(component.isExpanded).toBeDefined();
  });

  it('debe tener una propiedad showSubmenu', () => {
    expect(component.showSubmenu).toBeDefined();
  });

  it('debe tener una propiedad isShowing', () => {
    expect(component.isShowing).toBeDefined();
  });

  it('debe tener una propiedad showSubSubMenu', () => {
    expect(component.showSubSubMenu).toBeDefined();
  });

  it('debe tener un mentodo mouseenter', () => {
    expect(component.mouseenter).toBeDefined();
  });

});
