import React, { Component } from "react";

import $ from "jquery";

import Sidebar from "components/sidebar";
import BarraTopo from "components/barra-topo";
import Footer from "components/footer";

// import DateRangePicker from "../../../components/date-range-picker";
import "./index.scss";
import "pages-js/jquery.dashboard.js";
import "pages-js/jquery.c3-chart.init.js";
import "plugins/morris/morris.css";

class Dashboard extends Component {
  componentDidMount() {
    window.google.load("visualization", "1", { packages: ["corechart"] });

    window.google.setOnLoadCallback(() => {
      this.criarGraficos();
    });
  }

  createPieChart(selector, data, colors, is3D, issliced) {
    const options = {
      fontName: "Poppins",
      fontSize: 13,
      height: 300,
      width: 500,
      chartArea: {
        left: 50,
        width: "90%",
        height: "90%"
      },
      colors: colors
    };

    if (is3D) {
      options["is3D"] = true;
    }

    if (issliced) {
      options["is3D"] = true;
      options["pieSliceText"] = "label";
      options["slices"] = {
        2: { offset: 0.15 },
        5: { offset: 0.1 }
      };
    }

    const google_chart_data = window.google.visualization.arrayToDataTable(
      data
    );
    const pie_chart = new window.google.visualization.PieChart(selector);
    pie_chart.draw(google_chart_data, options);
  }

  createLineChart(selector, data, axislabel, colors) {
    const options = {
      fontName: "Poppins",
      height: 340,
      curveType: "function",
      fontSize: 14,
      chartArea: {
        left: "5%",
        width: "90%",
        height: 300
      },
      pointSize: 4,
      tooltip: {
        textStyle: {
          fontName: "Poppins",
          fontSize: 14
        }
      },
      vAxis: {
        title: axislabel,
        titleTextStyle: {
          fontSize: 14,
          italic: false
        },
        gridlines: {
          color: "#f5f5f5",
          count: 10
        },
        minValue: 0
      },
      legend: {
        position: "top",
        alignment: "center",
        textStyle: {
          fontSize: 14
        }
      },
      lineWidth: 3,
      colors: colors
    };

    const google_chart_data = window.google.visualization.arrayToDataTable(
      data
    );
    const line_chart = new window.google.visualization.LineChart(selector);
    line_chart.draw(google_chart_data, options);
    // return line_chart;
  }

  respChart(selector, type, data, options) {
    // get selector by context
    const ctx = selector.get(0).getContext("2d");
    // pointing parent container to make chart js inherit its width
    // const container = $(selector).parent();

    // enable resizing matter
    $(window).resize(generateChart);

    // this function produce the responsive Chart JS
    function generateChart() {
      // make chart width fit with its container
      // const ww = selector.attr("width", $(container).width());
      switch (type) {
        case "Line":
          new window.Chart(ctx, { type: "line", data: data, options: options });
          break;
        case "Doughnut":
          new window.Chart(ctx, {
            type: "doughnut",
            data: data,
            options: options
          });
          break;
        case "Pie":
          new window.Chart(ctx, { type: "pie", data: data, options: options });
          break;
        case "Bar":
          new window.Chart(ctx, { type: "bar", data: data, options: options });
          break;
        case "Radar":
          new window.Chart(ctx, {
            type: "radar",
            data: data,
            options: options
          });
          break;
        case "PolarArea":
          new window.Chart(ctx, {
            data: data,
            type: "polarArea",
            options: options
          });
          break;

        default:
          new window.Chart(ctx, { type: "bar", data: data, options: options });
          break;
      }
      // Initiate new chart or Redraw
    }
    // run function - render chart at first load
    generateChart();
  }

  criarGraficos() {
    const pie_data = [
      ["Cargo", "Eleitos"],
      ["Presidente", 1],
      ["Vice - Presidente", 0],
      ["Governador", 12],
      ["Vice-Governador", 13],
      ["Senador", 21],
      ["Deputado Federal", 237],
      ["Deputado Estadual", 527],
      ["Deputado Distrital", 24],
      ["Senador 1º Suplente", 15],
      ["Senador 2º Suplente", 18]
    ];

    this.createPieChart(
      document.getElementById("pie-3d-chart"),
      pie_data,
      [
        "#188ae2",
        "#4bd396",
        "#f9c851",
        "#f5707a",
        "#6b5fb5",
        "#78c350",
        "#ff9800",
        "#8892d6",
        "#F06292",
        "#45bbe0"
      ],
      false,
      false
    );

    const pie_data_2 = [
      ["Cargo", "Eleitos"],
      ["Presidente", 1],
      ["Vice - Presidente", 0],
      ["Governador", 12],
      ["Vice-Governador", 14],
      ["Senador", 23],
      ["Deputado Federal", 258],
      ["Deputado Estadual", 580],
      ["Deputado Distrital", 26],
      ["Senador 1º Suplente", 19],
      ["Senador 2º Suplente", 19]
    ];

    this.createPieChart(
      document.getElementById("pie-3d-chart-2"),
      pie_data_2,
      [
        "#188ae2",
        "#4bd396",
        "#f9c851",
        "#f5707a",
        "#6b5fb5",
        "#78c350",
        "#ff9800",
        "#8892d6",
        "#F06292",
        "#45bbe0"
      ],
      false,
      false
    );

    const pie_data_3 = [
      ["Cargo", "Eleitos"],
      ["Presidente", 0],
      ["Vice - Presidente", 0],
      ["Governador", 2],
      ["Vice-Governador", 1],
      ["Senador", 4],
      ["Deputado Federal", 29],
      ["Deputado Estadual", 73],
      ["Deputado Distrital", 0],
      ["Senador 1º Suplente", 2],
      ["Senador 2º Suplente", 3]
    ];

    this.createPieChart(
      document.getElementById("pie-3d-chart-3"),
      pie_data_3,
      [
        "#188ae2",
        "#4bd396",
        "#f9c851",
        "#f5707a",
        "#6b5fb5",
        "#78c350",
        "#ff9800",
        "#8892d6",
        "#F06292",
        "#45bbe0"
      ],
      false,
      false
    );

    const pie_data_4 = [
      ["Cargo", "Votos"],
      ["Presidente", 5096350],
      ["Vice - Presidente", 0],
      ["Governador", 14048096],
      ["Vice-Governador", 0],
      ["Senador", 20310584],
      ["Deputado Federal", 5891806],
      ["Deputado Estadual", 6871007],
      ["Deputado Distrital", 19536],
      ["Senador 1º Suplente", 0],
      ["Senador 2º Suplente", 0]
    ];

    this.createPieChart(
      document.getElementById("pie-3d-chart-4"),
      pie_data_4,
      [
        "#188ae2",
        "#4bd396",
        "#f9c851",
        "#f5707a",
        "#6b5fb5",
        "#78c350",
        "#ff9800",
        "#8892d6",
        "#F06292",
        "#45bbe0"
      ],
      false,
      false
    );

    const barChart = {
      labels: ["AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PI",
      "PR",
      "RJ",
      "RN",
      "RO",
      "RR",
      "RS",
      "SC",
      "SE",
      "SP",
      "TO",
      "ZZ",],
      datasets: [
        {
          label: "Votos Presidente",
          backgroundColor: "rgba(0, 76, 148, 0.3)",
          borderColor: "#004c94",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 76, 148, 0.6)",
          hoverBorderColor: "#004c94",
          data: [33115,
            58580,
            29190,
            19241,
            172900,
            53157,
            53640,
            79049,
            146440,
            50654,
            506590,
            90897,
            67498,
            229122,
            51334,
            77987,
            47974,
            220744,
            208325,
            40405,
            37048,
            19231,
            350800,
            154068,
            45978,
            2224049,
            21666,
            6668,]
        }
      ]
    };
    
    this.respChart($("#bar"), "Bar", barChart);

    const barChart2 = {
      labels: ["CE",
      "GO",
      "MA",
      "MG",
      "MS",
      "MT",
      "PI",
      "RO",
      "RR",
      "RS",
      "SE",
      "SP",],
      datasets: [
        {
          label: "Votos Governador",
          backgroundColor: "rgba(0, 76, 148, 0.3)",
          borderColor: "#004c94",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 76, 148, 0.6)",
          hoverBorderColor: "#004c94",
          data: [488438,
            407507,
            64447,
            2814704,
            576993,
            271952,
            300549,
            241885,
            104114,
            2143603,
            202349,
            6431555,]
        }
      ]
    };

    this.respChart($("#bar-2"), "Bar", barChart2);

    const barChart3 = {
      labels: ["AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MS",
      "MT",
      "PA",
      "PB",
      "PE",
      "PR",
      "RJ",
      "RN",
      "SC",
      "SP",
      "TO",],
      datasets: [
        {
          label: "Votos Senador",
          backgroundColor: "rgba(0, 76, 148, 0.3)",
          borderColor: "#004c94",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 76, 148, 0.6)",
          hoverBorderColor: "#004c94",
          data: [895738,
            834809,
            45999,
            948541,
            882019,
            403735,
            480122,
            416613,
            411248,
            347861,
            330430,
            1138377,
            601343,
            925371,
            377872,
            248868,
            382249,
            802037,
            9667340,
            170012,]
        }
      ]
    };

    this.respChart($("#bar-3"), "Bar", barChart3);

    const barChart4 = {
      labels: ["AC",
      "AL",
      "AM",
      "AP",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MG",
      "MS",],
      datasets: [
        {
          label: "Votos Deputado Federal",
          backgroundColor: "rgba(0, 76, 148, 0.3)",
          borderColor: "#004c94",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(0, 76, 148, 0.6)",
          hoverBorderColor: "#004c94",
          data: [41891,
            124158,
            82337,
            15124,
            219247,
            244788,
            25381,
            45204,
            299494,
            78736,
            769033,
            298994,]
        }
      ]
    };

    this.respChart($("#bar-4"), "Bar", barChart4);
  }

  render() {
    return (
      <div id="wrapper">
        <BarraTopo />

        <Sidebar />

        <div className="content-page">
          {/* <!-- Start content --> */}
          <div className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">Bem Vindo!</h4>
                    <ol className="breadcrumb p-0 m-0">
                      <li>
                        <span>PSDB</span>
                      </li>
                      {/* <!--<li>-->
                          <!--<a href="#">Dashboard</a>-->
                      <!--</li>--> */}
                      <li className="active">Eleições</li>
                    </ol>
                    <div className="clearfix" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title m-t-0">
                        Quadro de pré-candidatos por cargo
                      </h4>

                      <div className="google-chart text-center">
                        <div className="chart" id="pie-3d-chart" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title m-t-0">
                        Quadro de candidatos por cargo
                      </h4>

                      <div className="google-chart text-center">
                        <div className="chart" id="pie-3d-chart-2" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title m-t-0">
                        Quadro de pré-candidatos por cargo
                      </h4>

                      <div className="google-chart text-center">
                        <div className="chart" id="pie-3d-chart-3" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title m-t-0">
                        Quadro de votação por cargo
                      </h4>

                      <div className="google-chart text-center">
                        <div className="chart" id="pie-3d-chart-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="header-title m-t-0">
                        Votação PSDB por estado por cargo
                      </h4>

                      <div className="row">
                        <div className="col-lg-6">
                          <canvas id="bar" width="600" height="300" />
                        </div>

                        <div className="col-lg-6">
                          <canvas id="bar-2" width="600" height="300" />
                        </div>
                      </div>

                      <br />

                      <div className="row">
                        <div className="col-lg-6">
                          <canvas id="bar-3" width="600" height="300" />
                        </div>

                        <div className="col-lg-6">
                          <canvas id="bar-4" width="600" height="300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Dashboard;
