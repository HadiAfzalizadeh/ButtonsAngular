import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ButtonService } from '../../services/button-service.service';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() content = '';

  constructor(public router: Router, public buttonService: ButtonService) {}

  onClick() {
    this.buttonService
      .getButtonContent(this.content)
      .subscribe((data) =>
        this.router.navigateByUrl('/content', { state: { content: data } })
      );
  }
}
