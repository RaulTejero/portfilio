import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  name:string;
  roll:string;
  constructor(private AuthorService:AuthorService) {
    
  }

  async ngOnInit() {
    this.name = await this.AuthorService.getName();
    console.log(this.name);
    this.roll = await this.AuthorService.getRoll();
    console.log(this.roll);
  }

}
