import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  isLoading = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.loaddingTriggered.subscribe({
      next: (isLoading: boolean) => {
        this.isLoading = isLoading;
      },
    });
  }
}
