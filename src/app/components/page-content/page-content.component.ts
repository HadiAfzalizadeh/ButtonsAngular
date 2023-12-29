import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button-content',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.scss',
})
export class ContentComponent {
  content = '';

  ngOnInit() {
    this.content = window.history.state.content;
  }
}
