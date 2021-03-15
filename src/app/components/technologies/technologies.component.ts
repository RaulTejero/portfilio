import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  technologies: any;
  $elementsTechnologies: any;
  constructor(private Technologies: TechnologiesService ) { 
     this.technologies = [];
     this.$elementsTechnologies = [];
  }
 
   ngOnInit(): void {
    
    // this.technologies = await this.Technologies.getAll();
    this.Technologies.getAll()
    .then((resolve)=> {
      setTimeout(() => {
         this.technologies = resolve;
      console.log(this.technologies);
      }, 3000);
     
      
      return "hecho"
    })
    .then((resolve)=> {
      console.log(resolve);
      
      this.$elementsTechnologies = document.querySelectorAll("div.containerTechnologies>section>div");
      console.log(this.$elementsTechnologies);
    })
    // TODO: estoy con esto 

    // console.log(this.technologies);



    // setTimeout(() => {
    //   this.$elementsTechnologies = document.querySelectorAll("div.containerTechnologies>section>div");
    //   console.log(this.$elementsTechnologies);
    // }, 2000);
    
    
  }

}
