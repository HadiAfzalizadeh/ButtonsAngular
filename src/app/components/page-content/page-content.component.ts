import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class ContentComponent {
  content = '';

  ngOnInit() {
    this.content = window.history.state.content;
  }
}
