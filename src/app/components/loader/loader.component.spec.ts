import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoaderService } from '../../core/services/loader.service';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('se debe instanciar el componente', () => {
    expect(component).toBeTruthy();
  });

  it('se debe tewner una propiedad isLoading', () => {
    expect(component.isLoading).toBeDefined();
  });

  it('se debe tener un método constructor', () => {
    expect(component.constructor).toBeDefined();
  });

  it('se debe tewner una propiedad isLoading inicialmente en false', () => {
    expect(component.isLoading).toBeFalse();
  });

  it('en el constructor debe llamarse el loaderService', () => {
    const loaderService = TestBed.inject(LoaderService);
    spyOn(loaderService.loaddingTriggered, 'subscribe');
    component = new LoaderComponent(loaderService);
    expect(loaderService.loaddingTriggered.subscribe).toHaveBeenCalled();
  });
});
