import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav: string[];
  clickBtn: boolean;
  clickLinks: boolean;
  circlesBtn: any;
  divContainer: any;
  divContainerNav: any;
  linksNav: any;

  constructor(private NavService: NavService) {
    this.nav = [];
    this.clickBtn = false;
    this.clickLinks = false;
  }

  async ngOnInit() {
    this.nav = await this.NavService.getAllNav();
    this.divContainer = document.querySelector("div.container");
    this.circlesBtn = document.querySelectorAll("div.circles");
    this.divContainerNav = document.querySelector("div.containerNavbar");
  }

  addclass(element, className) {
    element.classList.add(className);
  }

  removeclass(element, className) {
    element.classList.remove(className);
  }

  mouseEnter() {
    this.addclass(this.circlesBtn[0], "center");
    this.addclass(this.circlesBtn[3], "center");
    this.removeclass(this.circlesBtn[0], "topLeft");
    this.removeclass(this.circlesBtn[1], "topRight");
    this.removeclass(this.circlesBtn[3], "bottomRight");
    this.removeclass(this.circlesBtn[4], "bottomLeft");
    this.circlesBtn.forEach(el => {
      this.addclass(el, "shadow");
    });
  }

  mouseOut() {
    this.circlesBtn.forEach(el => {
      this.removeclass(el, "shadow");
    });
    if (this.clickBtn != true) {
      this.removeclass(this.circlesBtn[0], "center");
      this.removeclass(this.circlesBtn[3], "center");

    } else {
      this.addclass(this.circlesBtn[0], "topLeft");
      this.addclass(this.circlesBtn[1], "topRight");
      this.addclass(this.circlesBtn[3], "bottomRight");
      this.addclass(this.circlesBtn[4], "bottomLeft");
    }
  }
  onClick() {
    console.log("entra");
    console.log(this.clickBtn);
    
    if (this.clickBtn != true) {
      this.addclass(this.divContainer, "open");
      this.removeclass(this.divContainer, "closed");
      setTimeout(() => {
        this.removeclass(this.divContainer, "closed");
      }, 2000);
      this.clickBtn = !this.clickBtn;
    } else {
      this.removeclass(this.divContainer, "open");
      this.addclass(this.divContainer, "closed");
      this.clickBtn = !this.clickBtn;
    }
  }
  onClickLink() {
    if (window.innerWidth <= 800) {
      this.removeclass(this.divContainer, "open");
      this.addclass(this.divContainer, "closed");
      this.removeclass(this.circlesBtn[0], "topLeft");
      this.removeclass(this.circlesBtn[1], "topRight");
      this.removeclass(this.circlesBtn[3], "bottomRight");
      this.removeclass(this.circlesBtn[4], "bottomLeft");
      this.removeclass(this.circlesBtn[0], "center");
      this.removeclass(this.circlesBtn[3], "center");
      this.clickBtn = !this.clickBtn;
    }

  }

  enterLink(event) {
    this.linksNav = document.querySelectorAll("a");
    this.linksNav.forEach(el => {
      this.addclass(el, "hoverLinks");
      if (event.target.textContent == el.textContent) {
        this.removeclass(event.target, "hoverLinks");
        this.addclass(event.target, "transition");
      }
    });
  }
  outLink(event) {
    this.linksNav.forEach(el => {
      this.removeclass(el, "hoverLinks");
      this.removeclass(event.target, "transition");
    });
  }


}

