import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav: string[];
  clickBtnBoolean: boolean;
  hoverNavBoolean: boolean;
  circlesBtn: any;
  divContainer: any;
  divContainerNav: any;

  constructor(private NavService: NavService) {
    this.nav = [];
    this.clickBtnBoolean = false;
  }

  async ngOnInit() {
    this.nav = await this.NavService.getAllNav();
    this.divContainer = document.querySelector("div.container");
    this.circlesBtn = document.querySelectorAll("div.circles");
    console.log(this.divContainer);
    this.divContainerNav = document.querySelector("div.containerNavbar");
  }

  addclass(element, className) {
    element.classList.add(className)
  }

  removeclass(element, className) {
    element.classList.remove(className)
  }

  mouseEnter() {
    if (this.clickBtnBoolean == false) {
      this.addclass(this.circlesBtn[0], "center");
      this.addclass(this.circlesBtn[3], "center");
    }
  }

  mouseOut() {
    if (this.clickBtnBoolean == false) {
      this.removeclass(this.circlesBtn[0], "center");
      this.removeclass(this.circlesBtn[3], "center");
    }
  }

  onClick() {


    if (this.clickBtnBoolean == false) {
      this.addclass(this.circlesBtn[0], "topLeft");
      this.addclass(this.circlesBtn[1], "topRight");
      this.addclass(this.circlesBtn[3], "bottomRight");
      this.addclass(this.circlesBtn[4], "bottomLeft");
      this.addclass(this.divContainer, "open");
      this.removeclass(this.divContainer, "closed");

      this.clickBtnBoolean = !this.clickBtnBoolean;
    } else {
      this.removeclass(this.circlesBtn[0], "topLeft");
      this.removeclass(this.circlesBtn[1], "topRight");
      this.removeclass(this.circlesBtn[3], "bottomRight");
      this.removeclass(this.circlesBtn[4], "bottomLeft");
      this.removeclass(this.divContainer, "open");
      this.addclass(this.divContainer, "closed");
      setTimeout(() => {
       this.removeclass(this.divContainer,"closed");
      }, 2000);

      this.clickBtnBoolean = !this.clickBtnBoolean;
    }
    console.log(this.divContainer);
  }



}

