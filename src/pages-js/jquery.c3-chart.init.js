/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
/* eslint-disable no-control-regex */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable no-redeclare */

/**
* Theme: Codefox - Bootstrap 4 Admin Template
* Author: Coderthemes
* Chart window.c3 page
*/

!function($) {
    "use strict";

    var ChartC3 = function() {};

    ChartC3.prototype.init = function () {
        //generating chart 
        window.c3.generate({
            bindto: '#chart-filiacoes',
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
            },
            data: {
                columns: [
                    ['RJ', 150, 80, 70, 152, 250, 95],
                    ['PR', 200, 130, 90, 240, 130, 220],
                    ['MS', 332, 20, 12, 433, 21, 222],
                    ['MG', 981, 23, 444, 221, 311, 250],
                    ['PE', 421, 312, 451, 400, 250, 250],
                    ['SP', 300, 311, 160, 222, 333, 250]
                ],
                type: 'bar',
                colors: {
                    data1: '#8892d6',
                    data2: '#348cd4',
                    data3: '#45bbe0'
                }
                
            },
            grid: {
                x: {
                    lines: [
                        {value: 0, text: '01/2019'},
                        {value: 1, text: '02/2019'},
                        {value: 2, text: '03/2019'},
                        {value: 3, text: '04/2019'},
                        {value: 4, text: '05/2019'},
                        {value: 5, text: '06/2019'},
                    ]
                },
            }
        });

        //combined chart
        window.c3.generate({
            bindto: '#combine-chart',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220],
                    ['data3', 300, 200, 160, 400, 250, 250],
                    ['data4', 200, 130, 90, 240, 130, 220],
                    ['data5', 130, 120, 150, 140, 160, 150]
                ],
                types: {
                    data1: 'bar',
                    data2: 'bar',
                    data3: 'spline',
                    data4: 'line',
                    data5: 'bar'
                },
                colors: {
                    data1: '#1ea69a',
                    data2: '#ebeff2',
                    data3: '#8892d6',
                    data4: '#45bbe0',
                    data5: '#3b3e47'
                },
                groups: [
                    ['data1','data2']
                ]
            },
            axis: {
                x: {
                    type: 'categorized'
                }
            }
        });
        
        //roated chart
        window.c3.generate({
            bindto: '#roated-chart',
            data: {
                columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
                ],
                types: {
                data1: 'bar'
                },
                colors: {
	                data1: '#45bbe0',
	                data2: '#348cd4'
	            }
            },
            axis: {
                rotated: true,
                x: {
                type: 'categorized'
                }
            }
        });

        //stacked chart
        window.c3.generate({
            bindto: '#chart-stacked',
            data: {
                columns: [
                    ['data1', 30, 20, 50, 40, 60, 50],
                    ['data2', 200, 130, 90, 240, 130, 220]
                ],
                types: {
                    data1: 'area-spline',
                    data2: 'area-spline'
                    // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                },
                colors: {
                    data1: '#f06292',
                    data2: '#348cd4'
                }
            }
        });
        
        //Donut Chart
        window.c3.generate({
             bindto: '#donutx-chart',
            data: {
                columns: [
                    ['data1', 46],
                    ['data2', 24]
                ],
                type : 'donut'
            },
            donut: {
                title: "Candidates",
                width: 30,
				label: { 
					show:false
				}
            },
            color: {
            	pattern: ["#348cd4", "#ebeff2"]
            }
        });
        
        //Pie Chart
        window.c3.generate({
             bindto: '#pie-chart',
            data: {
                columns: [
                    ['Lulu', 46],
                    ['Olaf', 24],
                    ['Item 3', 30]
                ],
                type : 'pie'
            },
            color: {
            	pattern: ["#ebeff2", "#45bbe0", "#f7531f"]
            },
            pie: {
		        label: {
		          show: false
		        }
		    }
        });
        
        //Line regions
        window.c3.generate({
             bindto: '#line-regions',
            data: {
                columns: [
		            ['data1', 30, 200, 100, 400, 150, 250],
		            ['data2', 50, 20, 10, 40, 15, 25]
		        ],
		        regions: {
		            'data1': [{'start':1, 'end':2, 'style':'dashed'},{'start':3}], // currently 'dashed' style only
		            'data2': [{'end':3}]
		        },
		        colors: {
	                data1: '#f7531f',
	                data2: '#8892d6'
	            }
            }
            
        });
        
        
        //Scatter Plot
        window.c3.generate({
             bindto: '#scatter-plot',
             data: {
		        xs: {
		            setosa: 'setosa_x',
		            versicolor: 'versicolor_x',
		        },
		        // iris data from R
		        columns: [
		            ["setosa_x", 3.5, 3.0, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3.0, 3.0, 4.0, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3.0, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3.0, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3.0, 3.8, 3.2, 3.7, 3.3],
		            ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8],
		            ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
		            ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
		        ],
		        
		        type: 'scatter'
		    },
		    color: {
            	pattern: ["#f06292", "#3b3e47", "#45bbe0", "#1ea69a"]
            },
		    axis: {
		        x: {
		            label: 'Sepal.Width',
		            tick: {
		                fit: false
		            }
		            
		        },
		        y: {
		            label: 'Petal.Width'
		        }
		    }
            
        });

    },
    $.ChartC3 = new ChartC3, $.ChartC3.Constructor = ChartC3

}(window.jQuery),

//initializing 
function($) {
    "use strict";

    setTimeout( () => {
    $.ChartC3.init()

    }, 2000)
}(window.jQuery);



