import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  progress = 0;

  ngOnInit(){
    let id = setInterval(()=>{
      this.progress += 0.1;
      if(this.progress > 1)clearInterval(id)
    }, 1000)
  }
}
