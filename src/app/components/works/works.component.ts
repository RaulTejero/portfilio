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
  colors: string[];
  $elements: any;
  $divBackground: any;
  $idDivBackground: number;
  valueBtnViewWork: boolean;
  $elementOpenWork: any;
  $idElementOpenWork: number;
 

  constructor(private WorksServices: WorksService, private ColorsService: ColorsService) {
    this.works = [];
    this.orderWorks = [];
    this.$elements = [];
    this.colors = [];
    this.valueBtnViewWork = false;
  }

  async ngOnInit() {
    this.works = await this.WorksServices.getAll();
    this.colors = await this.ColorsService.getAllColors();

    
    setTimeout(() => {
      this.$elements = document.querySelectorAll("div.containerWorks>section>article>div>div.work");
    }, 2000);
    this.orderWorks = this.works.sort((a, b) => {
      return b.id - a.id;
    });
    
  }

  enterMouse(event) {
    // this.$divBackground = event.target;
    // this.$idDivBackground = event.target.id;
    // this.$divBackground.classList.add("open");
    // if (this.valueBtnViewWork != true) {
    //   this.$divBackground.style.backgroundColor = this.colors[this.$idDivBackground];
    // }
  }
  outMouse(){
    // if (this.valueBtnViewWork != true) {
    //   this.$divBackground.style.backgroundColor = "rgba(0, 0, 0, 0.359)";
    // }
    
  }
  openWorK(event) {
    // console.log(event.target.parentNode.parentNode);
    // this.$elementOpenWork = event.target.parentNode.parentNode;
    // this.$idElementOpenWork = event.target.parentNode.parentNode.id;
    // this.$elementOpenWork.style.backgroundColor = "black";
    // this.valueBtnViewWork = !this.valueBtnViewWork;
    // this.$divBackground.classList.add("openWork");
    
  }
  closeWork(event)  {
    // console.log("entra");
    // console.log(event.target.parentNode.parentNode.parentNode.parentNode);
    // this.$divBackground.classList.remove("openWork");
    // this.$divBackground.style.backgroundColor = this.colors[this.$idDivBackground];
    
    
  }
}
