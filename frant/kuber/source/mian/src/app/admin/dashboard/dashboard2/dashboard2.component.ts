import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexLegend,
  ApexFill,
  ApexResponsive,
  ApexNonAxisChartSeries,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  series2: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  fill: ApexFill;
  title: ApexTitleSubtitle;
  responsive: ApexResponsive[];
  labels: string[];
};

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.scss'],
  standalone: true,
  imports: [
    BreadcrumbComponent,
    MatProgressBarModule,
    NgApexchartsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    NgScrollbar,
    CommonModule
  ],
})
export class Dashboard2Component implements OnInit {
  public lineChartOptions!: Partial<ChartOptions>;
  public pieChartOptions!: Partial<ChartOptions>;
  //  color: ["#3FA7DC", "#F6A025", "#9BC311"],
  constructor(private http: HttpClient) {
    // controller code
  }
  ngOnInit() {
    this.chart1();
    this.chart2();
  }


  

  private chart1() {
    this.http.get<any>('http://localhost:8080/employees/hours-worked-for-week').subscribe((data: any) => {
      const seriesData: any[] = [];
      const categories: string[] = Object.keys(data[Object.keys(data)[0]]);
      
      for (const employee in data) {
        if (Object.prototype.hasOwnProperty.call(data, employee)) {
          const employeeData: any = {
            name: employee,
            data: []
          };
          for (const day of categories) {
            employeeData.data.push(data[employee][day]);
          }
          seriesData.push(employeeData);
        }
      }
  
      this.lineChartOptions = {
        series: seriesData,
        chart: {
          height: 350,
          type: 'line',
          foreColor: '#9aa0ac',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ['#A5A5A5', '#875692', '#4CB5AC'], // Define colors for each employee
        stroke: {
          curve: 'smooth',
        },
        grid: {
          show: true,
          borderColor: '#9aa0ac',
          strokeDashArray: 1,
        },
        markers: {
          size: 3,
        },
        xaxis: {
          categories: categories,
          title: {
            text: 'Week',
          },
        },
        yaxis: {
          title: {
            text: 'Hours Worked',
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
        tooltip: {
          theme: 'dark',
          marker: {
            show: true,
          },
          x: {
            show: true,
          },
        },
      };
    });
  }
  
  

  
  private chart2() {
    this.pieChartOptions = {
      series2: [44, 55, 13, 43, 22],
      chart: {
        type: 'donut',
        width: 225,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ['Science', 'Mathes', 'Economics', 'History', 'Music'],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
}
