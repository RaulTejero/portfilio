import { Component, OnInit } from '@angular/core';
import { ColorsService } from 'src/app/services/colors.service';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works: any[];
  orderWorks: any[];
 
 
  $containerSelectHover: any;
  $idContainerSelectHover: number;
  $containerClick: any;
  $idContainerClick: number;
  color: string;

  constructor(private WorksServices: WorksService) {
    this.works = [];
    this.orderWorks = [];
    this.color = "rgb(220, 4, 0)"
  }

  async ngOnInit() {
    this.works = await this.WorksServices.getAll();
    this.orderWorks = this.works.sort((a, b) => {
      return b.id - a.id;
    });

  }

  enterMouse(event) {
    this.$containerSelectHover = event.target;
    this.$idContainerSelectHover = event.target.id;

    for (let i = 0; i < this.$containerSelectHover.classList.length; i++) {
      if (this.$containerSelectHover.classList[i] == "openWork") {
        this.$containerSelectHover.style.backgroundColor = "rgba(0, 0, 0)";
        this.$containerSelectHover.style.backgroundImage = "initial";
      } else {
        this.$containerSelectHover.style.backgroundColor = this.color;
      }
    }
  }


  outMouse(event) {
    this.$containerSelectHover = event.target;
    for (let i = 0; i < this.$containerSelectHover.classList.length; i++) {
      if (this.$containerSelectHover.classList[i] != "openWork") {
        this.$containerSelectHover.style.backgroundColor = "rgba(0, 0, 0, 0.496)"
      }
    }
  }

  openWorK(event) {
    this.$containerClick = event.target.parentNode.parentNode;
    this.$idContainerClick = event.target.parentNode.parentNode.id;
    this.$containerClick.style.backgroundColor = "black";
    this.$containerClick.style.backgroundImage = "none";
    this.$containerClick.classList.add("openWork");
  }
  closeWork(event) {
    this.$containerClick = event.target.parentNode.parentNode.parentNode.parentNode;
    let id = 0;
    id = this.$containerClick.id;
    this.$containerClick.classList.remove("openWork");
    this.$containerClick.style.backgroundColor = this.color;
    let result = this.orderWorks.filter(el => el.id == id);
    ;
    let backgroundImage = result[0].imgFirst;
    this.$containerClick.style.backgroundImage = "url("+backgroundImage+")" ;
  }
}
