import { Component, Input } from '@angular/core';
import { ChartDataset, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  @Input() lineChartLabels: string[] = [];
  @Input() lineChartData: ChartDataset[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true,
    layout: {
      padding: 30,
    },
  };
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartPlugins: any[] = [];
}
