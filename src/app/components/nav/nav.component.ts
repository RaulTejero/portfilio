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
  linksNav: any;

  constructor(private NavService: NavService) {
    this.nav = [];
    this.clickBtnBoolean = false;
  }

  async ngOnInit() {
    this.nav = await this.NavService.getAllNav();
    this.divContainer = document.querySelector("div.container");
    this.circlesBtn = document.querySelectorAll("div.circles");
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
      this.circlesBtn.forEach(el => {
        this.addclass(el, "shadow");
      });
    } else {
      console.log("haz esto");
      this.removeclass(this.circlesBtn[0], "topLeft");
      this.removeclass(this.circlesBtn[1], "topRight");
      this.removeclass(this.circlesBtn[3], "bottomRight");
      this.removeclass(this.circlesBtn[4], "bottomLeft");
      this.circlesBtn.forEach(el => {
        this.addclass(el, "shadow");
      });
    }
    console.log(this.clickBtnBoolean);
    // ----------------
  }

  mouseOut() {
    if (this.clickBtnBoolean == false) {
      this.removeclass(this.circlesBtn[0], "center");
      this.removeclass(this.circlesBtn[3], "center");
      this.circlesBtn.forEach(el => {
        this.removeclass(el, "shadow");
      });
    } else {
      this.addclass(this.circlesBtn[0], "topLeft");
      this.addclass(this.circlesBtn[1], "topRight");
      this.addclass(this.circlesBtn[3], "bottomRight");
      this.addclass(this.circlesBtn[4], "bottomLeft");
      this.circlesBtn.forEach(el => {
        this.removeclass(el, "shadow");
      });
    }
    console.log(this.clickBtnBoolean);
    // --------
  }

  onClick() {

    if (window.innerWidth <= 800) {
      if (this.clickBtnBoolean == false) {
      this.addclass(this.divContainer, "open");
      this.removeclass(this.divContainer, "closed");
      this.circlesBtn.forEach(el => {
        this.addclass(el, "shadow");
      });
      this.clickBtnBoolean = !this.clickBtnBoolean;
    } else {
      this.removeclass(this.divContainer, "open");
      this.addclass(this.divContainer, "closed");
      setTimeout(() => {
        this.removeclass(this.divContainer, "closed");
      }, 2000);
      this.clickBtnBoolean = !this.clickBtnBoolean;
    }
    }
    
    console.log(this.clickBtnBoolean);
  }

  enterLink(event){
    this.linksNav = document.querySelectorAll("a");
    
    this.linksNav.forEach(el => {
      this.addclass(el,"hoverLinks");
      if (event.target.textContent == el.textContent) {
        this.removeclass(event.target,"hoverLinks");
        this.addclass(event.target,"transition");
      }
    });
    
    
  }
  outLink(event){
 
    this.linksNav.forEach(el => {
      this.removeclass(el,"hoverLinks");
      this.removeclass(event.target,"transition");
    });
  }


}

