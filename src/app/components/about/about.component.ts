import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  elementsTexts: any;
  texts: string[];
  ids: string[];
  id: string;
  divContainer: any;
  img: any;
  heightWindow: number;
  distance: number;
  constructor(private AboutService: AboutService, private NavServices: NavService) { }

  async ngOnInit() {
    this.texts = await this.AboutService.getP();
    this.ids = await this.NavServices.getAllNav();
    this.id = this.ids[1];
    this.divContainer = document.querySelector("div.container");
    this.elementsTexts = document.querySelectorAll("div.containerAbout section p");
    this.img = document.querySelector("div.containerAbout section div.img");

  
    window.addEventListener("scroll", () => {
      // this.distance = this.divContainer.getBoundingClientRect().top;
      this.heightWindow = window.innerHeight;
      // console.log(this.heightWindow);
      // console.log(this.distance);
      // console.log(this.divContainer.getBoundingClientRect());
      

    })

  }



  // mouseEnter() {
  //   console.log("entro");
  //   console.log(this.elementsTexts);
  //   this.elementsTexts.forEach(el => {
  //     el.classList.add("mouseEnter");
  //   });
  //   this.img.classList.add("mouseEnter");
  // }

}
