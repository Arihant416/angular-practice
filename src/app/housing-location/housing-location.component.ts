import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  users : any[]=[]
  constructor(private apiService: ApiService){}

  ngOnInit(){
    setTimeout(() => {
      this.apiService.getPosts().subscribe((data:any)=>{
        this.users=data;
      })
    }, 2000);
  }
}
