import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ButtonService } from '../../services/button-service.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FlexLayoutModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.scss',
  providers: [ButtonService],
})
export class ButtonListComponent {
  buttons: any[] = [];
  displayProgressBar = false;

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.buttonService.getAllButtons().subscribe((data) => {
      this.buttons = data;
    });
  }

  loading(isLoading: boolean) {
    this.displayProgressBar = isLoading;
  }
}
