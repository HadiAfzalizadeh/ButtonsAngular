import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { ButtonService } from '../../services/button-service.service';

@Component({
  selector: 'app-button-list',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.scss',
  providers: [ButtonService],
})
export class ButtonListComponent {
  buttons: any[] = [];

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.buttonService
      .getAllButtons()
      .subscribe((data) => (this.buttons = data));
  }
}
