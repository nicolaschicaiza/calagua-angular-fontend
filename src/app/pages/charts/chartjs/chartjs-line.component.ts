import { Component, OnDestroy } from '@angular/core';
import { NbThemeService, NbColorHelper } from '@nebular/theme';

@Component({
  selector: 'ngx-chartjs-line',
  template: `
    <chart type="line" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsLineComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June', 'January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          data: [65, 59, 80, 81, 56, 55, 40],
          label: 'Series A',
          backgroundColor: NbColorHelper.hexToRgbA(colors.primary, 0.3),
          borderColor: colors.primary,
        }, {
          data: [this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(), this.random(),this.random(), this.random(), this.random(), this.random(), this.random(), this.random()],
          label: 'Series B',
          backgroundColor: NbColorHelper.hexToRgbA(colors.danger, 0.3),
          borderColor: colors.danger,
        }, {
          data: [18, 48, 77, 9, 100, 27, 40],
          label: 'Series C',
          backgroundColor: NbColorHelper.hexToRgbA(colors.info, 0.3),
          borderColor: colors.info,
        },
        ],
      };

      this.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: chartjs.axisLineColor,
              },
              ticks: {
                fontColor: chartjs.textColor,
                suggestedMin: 0,
                suggestedMax: 200
              },
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
  private random() {
    return Math.round(Math.random() * 100);
  }

}
