import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number: number = 12
  isVisible: boolean = true;
  user = {
    name: "Hilman"
  }

  increment() {
    this.number++
  }

  decrement() {
    this.number--
  }

  update() {
    this.user.name = "Abu";
  }

  visible() {
    this.isVisible = !this.isVisible
  }
}
