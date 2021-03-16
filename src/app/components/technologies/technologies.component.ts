import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any;
  $elementsNameTechnologie: any;

  constructor(private Technologies: TechnologiesService ) { 
     this.technologies = [];
     this.$elementsNameTechnologie = [];
  }
 
   async ngOnInit(){
    
    this.technologies = await this.Technologies.getAll();
  }

  enter(event) {
    this.$elementsNameTechnologie = event.target.childNodes;
    this.$elementsNameTechnologie[0].style.display = "block";
    console.log("enter");
    
  }
  
  out() {
    this.$elementsNameTechnologie[0].style.display = "none";
  }

}
