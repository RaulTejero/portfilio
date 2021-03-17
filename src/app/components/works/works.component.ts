import { Component, OnInit } from '@angular/core';
import { WorksService } from 'src/app/services/works.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {
  works:any[];
  orderWorks: any[];
  constructor(private WorksServices: WorksService) {
    this.works = [];
    this.orderWorks = [];
   }

  async ngOnInit() {
    this.works = await this.WorksServices.getAll();
    console.log(this.works);
    
    this.orderWorks = this.works.sort((a,b)=> {
      return b.id-a.id;
    });
    this.orderWorks.forEach(el => {
      console.log(el);
      
    });
  }


  

}
