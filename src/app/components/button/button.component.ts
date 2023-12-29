import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonService } from '../../services/button-service.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() content = '';
  @Output() loadingEvent = new EventEmitter<boolean>();

  constructor(public router: Router, public buttonService: ButtonService) {}

  onClick() {
    this.loadingEvent.emit(true);
    this.buttonService.getButtonContent(this.content).subscribe((data) => {
      this.router.navigateByUrl('/content', { state: { content: data } });
      this.loadingEvent.emit(false);
    });
  }
}
