import { Component, Input, OnInit } from '@angular/core';

import { ChartData } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  ngOnInit() {
     this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data,
          backgroundColor: ['#6857E6','#009FEE','#F02059']
        },
      ],
    };
  }

  @Input() title: string = 'Sin título';

  @Input('labels') doughnutChartLabels: string[] = [ 'Label1', 'Label2', 'Label3'];

  @Input() data: number[] = [200, 400, 350];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

}
