import { Component, OnInit } from '@angular/core';
import { NavService } from 'src/app/services/nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  nav: string[];
  click: boolean;
  childsNodes: any;
  navElement: any;

  constructor(private NavService: NavService) {
    this.nav = [];
    this.click = false;
  }

  async ngOnInit() {
    this.nav = await this.NavService.getAllNav();

    this.navElement = document.querySelector("div.navbar>div:last-child>ul")
    console.log(this.navElement);
    

  }
  mouseEnter(event) {
    this.childsNodes = event.target.childNodes[0].childNodes;
    this.childsNodes[0].classList.add("center");
    this.childsNodes[4].classList.add("center");
    console.log(this.childsNodes[0].classList);
    console.log("dentro");
  }

  mouseOut() {
    this.childsNodes[0].classList.remove("center");
    this.childsNodes[4].classList.remove("center");
    console.log(this.childsNodes[0].classList);
  }
  onClick(){
    console.log(this.click);
    
    if(this.click == false){
      this.navElement.style.display = "block";
      this.click = !this.click;
    }else {
      this.navElement.style.display = "none";
      this.click = !this.click;
    }
    


    console.log("click");
    
  }


}
