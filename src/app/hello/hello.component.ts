import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  names: string[] = ["Anderson", "Renata", "Roberta", "Eduardo", "Thiago", "Rubens"];
  selectedName: string | null = null;

  selectName(name: string) {
    this.selectedName = name === this.selectedName ? null : name;
  }
}
