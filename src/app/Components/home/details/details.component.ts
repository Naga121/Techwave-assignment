import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdetService } from '../../../Services/prodet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:any;
  record:any;
  

  constructor(private route:ActivatedRoute, private pd:ProdetService) {

    this.route.params.subscribe(param=>this.id = param['id']);
    this.pd.getDetails(this.id).subscribe(
      (data)=>this.record = data,
      ()=> this.record =[]
    )
  }

  ngOnInit(): void {
  }

}
