import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-last',
  imports: [FormsModule],
  templateUrl: './last.component.html',
  styleUrl: './last.component.css'
})
export class LastComponent {
  bgImage = 'url("assets/image/check.png")';
}
