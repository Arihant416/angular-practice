import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  dataToSendToChild = "Hello Child";
  dataFromChild: string = "";
  receiveFromChild(data: string){
    this.dataFromChild = data;
    console.log("String data from child ", data)
  }
}
