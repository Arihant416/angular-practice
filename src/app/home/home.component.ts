import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { CustomFilterPipe } from '../custom-filter.pipe';
import { HighlightDirective } from '../highlight.directive';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HousingLocationComponent, CommonModule, FormsModule, ReactiveFormsModule, CustomFilterPipe, HighlightDirective]
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
  myName = new FormControl('')

  handleSearchTextChange(data: any){
    console.log(data)
  }


  mappers = [1,2,3,4,5,6,7,8,9]
}
