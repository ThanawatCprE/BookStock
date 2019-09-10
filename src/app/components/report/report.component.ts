import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  mChart:Chart = null;

  constructor() { }

  ngOnInit() {
    this.drawChart("bar");
  }
  drawChart(type){
    if(this.mChart !=null){
      this.mChart.destroy();
    }

    var ctx = document.getElementById('myChart');
    this.mChart = new Chart(ctx, {
      // The type of chart we want to create
      type: type,

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          fill: false,
          backgroundColor: ['rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'],
          borderWidth: 2,
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

}
