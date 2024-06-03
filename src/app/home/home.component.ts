import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() messageFromParent!: string;
  counter = 0;
  textInSearch = ""
  @Output() homeEvent = new EventEmitter<string>();
  handleEvent(){
    this.counter++;
    this.homeEvent.emit("Event Emitted from Child " + this.counter)
  }

  propertyBinding: string = "propertyBinding";
  ngModelBinded = "";
  interpolated: string = "interpolated";

  handleSearchTextChange(data: any){
    console.log(data)
  }
}
