import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataset } from 'chart.js';
import { ResasService } from '../service/resas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  chartLabels: string[] = [];
  chartData: ChartDataset[] = [];
  lstPrefectures: any[] = [];
  checkedItem: any;

  constructor(private resas: ResasService, private router: Router) {}

  ngOnInit(): void {
    this.getPrefectures();
  }

  randomColor() {
    return Math.floor(Math.random() * 16777215).toString(16);
  }
  getChartLabels(res: any) {
    this.chartLabels = [];
    res.result.data[0].data.forEach((element: any) => {
      this.chartLabels.push(element.year.toString());
    });
  }
  getChartData(prefCode: number) {
    this.resas.getPopulation(prefCode).subscribe((res) => {
      this.checkError(res);
      this.getChartLabels(res);
      res.result.data.forEach((element: any) => {
        const color = '#' + this.randomColor();
        const data: number[] = [];
        element.data.forEach((item: any) => {
          data.push(item.value);
        });
        this.chartData.push({
          data: data,
          label: element.label,
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          hoverBorderWidth: 10,
          borderColor: color,
          pointBackgroundColor: color,
          pointHoverBorderColor: color,
          tension: 0.2,
        });
      });
      console.log(this.chartData);
    });
  }
  getPrefectures() {
    this.resas.getPrefectures().subscribe((res) => {
      this.checkError(res);
      this.lstPrefectures = res.result;
    });
  }
  getCheckedItem(data: any) {
    this.chartData = [];
    this.checkedItem = data;
    this.getChartData(data.prefCode);
  }
  checkError(res: any) {
    if (res.statusCode) {
      this.router.navigate(['/' + res.statusCode]);
    }
  }
}
