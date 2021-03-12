import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  texts:string[];
  ids:string[];
  id:string;
  divContainer:any;
  constructor(private AboutService: AboutService, private NavServices:NavService) { }

  async ngOnInit() {
    this.texts = await this.AboutService.getP();
    this.ids= await this.NavServices.getAllNav();
    this.id = this.ids[1];
    this.divContainer = document.querySelector
    ("div.container");
    console.log(this.divContainer.classList);
    
  }
  mouseEnter() {
  this.divContainer.classList.remove("enter");
    console.log(this.divContainer.classList);
    // TODO: no cambia 
  }

}
