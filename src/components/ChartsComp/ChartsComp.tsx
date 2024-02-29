"use client";
import React, { Component } from "react";
import Chart from "react-apexcharts";

class ChartComp extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        labels: ["Prompt Used"],

        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: "16px",
                color: undefined,
                offsetY: 120,
              },
              value: {
                offsetY: 76,
                fontSize: "22px",
                color: undefined,
                formatter: function (val: any) {
                  return val + "%";
                },
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          dashArray: 4,
        },
      },
      series: props.series || [1],
    };
  }

  render() {
    return (
      <div className="radialbar">
        {typeof window !== "undefined" && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height="380"
          />
        )}
      </div>
    );
  }
}

export default ChartComp;
