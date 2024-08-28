sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Button",
    'sap/ui/core/date/UI5Date',
    'sap/m/DynamicDateRange',
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
    'sap/ui/Device'
	
],
function (Controller, JSONModel, Dialog, Button, UI5Date, DynamicDateRange, Filter, FilterOperator,ChartFormatter, Format, Device) {
    "use strict";

	
    function getIcrementedDateFromToday(iDays, iMonths, iYears) {
		var oResultingDate = UI5Date.getInstance();

		oResultingDate.setFullYear(oResultingDate.getFullYear() + iYears);
		oResultingDate.setMonth(oResultingDate.getMonth() + iMonths);
		oResultingDate.setDate(oResultingDate.getDate() + iDays);

		return oResultingDate;
	}
    var aPayments = [
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(-1, 0 ,0),
			Amount: 100.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-2, 0 ,0),
			Amount: 18.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, 0 ,0),
			Amount: 54.05,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-4, 0 ,0),
			Amount: 30.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-5, 0 ,0),
			Amount: 105.50,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, 0 ,0),
			Amount: 74.35,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, -1 ,0),
			Amount: 9.50,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-1, -1 ,0),
			Amount: 3.90,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(-5, -2 ,0),
			Amount: 200.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-4, -2 ,0),
			Amount: 153.80,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-9, 0 ,0),
			Amount: 5.30,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-8, 0 ,0),
			Amount: 1.60,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(0, -1 ,-1),
			Amount: 95.60,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(0, 0 ,0),
			Amount: 400.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: UI5Date.getInstance(2021, 5, 9, 15, 15, 0),
			Amount: 50.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: UI5Date.getInstance(2021, 5, 8, 10, 15, 0),
			Amount: 22.34,
			CurrencyCode: "EUR"
		}
	];
	
    return Controller.extend("ui.template.controller.View1", {
		dataPath : "test-resources/sap/viz/demokit/dataset/milk_production_testing_data/date_revenue_cost",

    settingsModel : {
        chartType : {
            name : "Chart Type",
            defaultSelected : "3",
            values : [{
                key : "0",
                name : "Bubble Chart",
                vizType : "timeseries_bubble",
                json : "/bubble/medium.json",
                value : ["Cost"],
                dataset : {
                    "dimensions": [{
                        "name": "Date",
                        "value": "{Date}",
                        "dataType":"date"
                    }],
                    "measures": [{
                        "name": "Cost",
                        "value": "{Cost}"
                    },
                    {
                        "name": "Revenue",
                        "value": "{Revenue}"
                    }],

                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    categoryAxis: {
                        title: {
                            visible: true
                        }
                    },
                    sizeLegend: {
                        formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                        title: {
                            visible: true
                        }
                    },
                    title: {
                        visible: false
                    }
                }
            },{
                key : "1",
                name : "Column Chart",
                vizType : "timeseries_column",
                json : "/column/medium.json",
                value : ["Cost"],
                dataset : {
                   dimensions: [{
                       name: 'Date',
                       value: "{Date}",
                       dataType:'date'
                   }],
                   measures: [{
                       name: 'Cost',
                       value: '{Cost}'
                   }],
                   data: {
                       path: "/milk"
                   }
                },
                vizProperties : {
                    plotArea: {
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                }
            },{
                key : "2",
                name : "Column Chart with Multiple Series",
                vizType : "timeseries_column",
                json : "/timeBulletStacked.json",
                value : ["Cost2", "Cost1"],
                dataset : {
                   dimensions: [{
                       name: 'Date',
                       value: "{Date}",
                       dataType:'date'
                   }],
                   measures: [{
                       name: 'Cost2',
                       value: '{Cost2}'
                   },{
                       name: 'Cost1',
                       value: '{Cost1}'
                   }],
                   data: {
                       path: "/milk"
                   }
                },
                vizProperties : {
                    plotArea: {
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }
                }
            },{
                key : "3",
                name : "Line Chart",
                vizType : "timeseries_line",
                json : "/column/timeAxis.json",
                value : ["Revenue"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Revenue',
                        value: '{Revenue}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "4",
                name : "Line Chart with Dynamic Value Axis",
                vizType : "timeseries_line",
                json : "/column/timeAxis.json",
                value : ["Revenue"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Revenue',
                        value: '{Revenue}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: true
                    }
                }
            },{
                key : "5",
                name : "Scatter Chart",
                vizType : "timeseries_scatter",
                json : "/column/large.json",
                value : ["Cost"],
                dataset : {
                   dimensions: [{
                       name: 'Date',
                       value: "{Date}",
                       dataType:'date'
                   }],
                   measures: [{
                       name: 'Cost',
                       value: '{Cost}'
                   }],
                   data: {
                       path: "/milk"
                   }
                },
                vizProperties : {
                    plotArea: {
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        }
                    },
                    valueAxis: {
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    title: {
                        visible: false
                    }

                }
            },{
                key : "6",
                name : "Combined Column & Line",
                vizType : "timeseries_combination",
                json : "/column/medium.json",
                value : ["Revenue", "Cost"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Revenue',
                        value: '{Revenue}'
                    },{
                        name: 'Cost',
                        value: '{Cost}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "7",
                name : "Combined Column & Line with Dual Axis",
                vizType : "dual_timeseries_combination",
                json : "/column/medium.json",
                value : ["Revenue", "Cost"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Revenue',
                        value: '{Revenue}'
                    },{
                        name: 'Cost',
                        value: '{Cost}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "8",
                name : "Bullet",
                vizType : "timeseries_bullet",
                json : "/timeBulletStacked.json",
                value : ["Cost", "Budget"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Cost',
                        value: '{Cost}'
                    },{
                        name: 'Budget',
                        value: '{Budget}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        dataPointStyle : {
                            rules : [{
                                dataContext : {Cost : "*"},
                                properties : {
                                    color : "sapUiChartPaletteSequentialHue1Light1"
                                },
                                displayName : "Actual",
                                dataName : {Cost : "Actual"}
                            }]
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "9",
                name : "Bullet Chart with Multiple Series",
                vizType : "timeseries_bullet",
                json : "/timeMultiple.json",
                value : ["Actual", "Budget"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    },{
                        name: 'Country',
                        value: '{Country}'
                    }],
                    measures: [{
                        name: 'Actual',
                        value: '{Actual}'
                    },{
                        name: 'Budget',
                        value: "{Budget}"
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "10",
                name : "Stacked Column",
                vizType : "timeseries_stacked_column",
                json : "/timeBulletStacked.json",
                value : ["Cost2", "Cost1"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Cost2',
                        value: '{Cost2}'
                    },{
                        name: 'Cost1',
                        value: '{Cost1}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "11",
                name : "Stacked Column 100%",
                vizType : "timeseries_100_stacked_column",
                json : "/timeBulletStacked.json",
                value : ["Cost2", "Cost1"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Cost2',
                        value: '{Cost2}'
                    },{
                        name: 'Cost1',
                        value: '{Cost1}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "12",
                name : "Waterfall",
                vizType : "timeseries_waterfall",
                json : "/timeWaterFall.json",
                value : ["Change of Stock"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Change of Stock',
                        value: '{Change of Stock}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "13",
                name : "Periodic Waterfall",
                vizType : "timeseries_waterfall",
                json : "/demands_supplies.json",
                value : ["Supplies", "Demands"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Demands',
                        value: '{Demands}'
                    },{
                        name: 'Supplies',
                        value: '{Supplies}'
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: null
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false,
                            recapTitle: "End of day",
                            showRecap: true
                        },
                        startValue: 10
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    legend: {
                        title: {
                            visible: false
                        },
                        label: {
                            text: {
                                negativeValue: "Demands",
                                positiveValue: "Supplies"
                            }
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            },{
                key : "14",
                name : "Stacked Combination",
                vizType : "info/timeseries_stacked_combination",
                json : "/timeBulletStacked.json",
                value : ["Cost2", "Cost1", "Revenue"],
                dataset : {
                    dimensions: [{
                        name: 'Date',
                        value: "{Date}",
                        dataType:'date'
                    }],
                    measures: [{
                        name: 'Cost1',
                        value: '{Cost1}'
                    },{
                        name: 'Cost2',
                        value: '{Cost2}'
                    },{
                        name: 'Revenue',
                        value: "{Revenue}"
                    }],
                    data: {
                        path: "/milk"
                    }
                },
                vizProperties : {
                    plotArea: {
                        window: {
                            start: "firstDataPoint",
                            end: "lastDataPoint"
                        },
                        dataLabel: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT_MFD2,
                            visible: false
                        },
                        dataShape: {
                            primaryAxis: ["bar","bar","line"]
                        }
                    },
                    valueAxis: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    valueAxis2: {
                        visible: true,
                        label: {
                            formatString:ChartFormatter.DefaultPattern.SHORTFLOAT
                        },
                        title: {
                            visible: false
                        }
                    },
                    timeAxis: {
                        title: {
                            visible: false
                        },
                        interval : {
                            unit : ''
                        }
                    },
                    title: {
                        visible: false
                    },
                    interaction: {
                        syncValueAxis: false
                    }
                }
            }]
        }
    },

    oVizFrame : null, chartTypeSelect : null, chart : null,
        onInit: function () {
            this.oDialog ??= this.loadFragment({
				name: "ui.template.fragment.Content"
			  })
				.then((oFragment) => {
				  this.getView().byId("contentPage").addContent(oFragment);
				})
				.then(() => {
				  this.ChartFragMenent ??= this.loadFragment({
					name: "ui.template.fragment.ChartOverview",
					controller: sap.ui.controller("ui.template.controller.ChartOverview") 
				  }).then((ChartOverview) => {
					this.getView().byId("navCon").addPage(ChartOverview);
					const oController = sap.ui.controller("ui.template.controller.ChartOverview") ;
					
						//oController.onInit.call(this);
					
				  });
				});
            
            var oTreeModel = new JSONModel({
                //////////////
                headerTitle : "HR template",
                headerSubTitle : "HR dashboard template from Mosec Solutions",
                headerActDate : new Intl.DateTimeFormat(['ban', 'id']).format(new Date()),
                headerCurrUser : "User: Steve Otieno",
                headerIconSrc : "templateapp\img\mosec_logo.png",
                /////////////////////////
                footerCopyright : "Copyright© 2024",
                footerClass : "Templates",
                footerPO : "Steve Otieno",
                footerDetails : "Dashboard details",
                ////////////////test
                showSideContent:false,
                payments:aPayments
    
            });
            this.getView().setModel(oTreeModel, "treeModel");
        },
        onChange: function(oEvent) {
			var oDynamicDateRange = oEvent.oSource,
				bValid = oEvent.getParameter("valid"),
				oTableItemsBinding, oValue, oTable, oFilter;

			if (bValid) {
				oTable = this.getView().byId("payments-table");
				oTableItemsBinding = oTable.getBinding("items");
				oValue = oEvent.getParameter("value");
				oFilter = this._createFilter(oValue);
				oTableItemsBinding.filter(oFilter, "Application");
				oDynamicDateRange.setValueState("None");
			} else {
				oDynamicDateRange.setValueState("Error");
			}
		},
        _createFilter: function(oValue) {
			if (oValue) {
				var aDates = DynamicDateRange.toDates(oValue);
				if (oValue.operator === "FROM" || oValue.operator === "FROMDATETIME") {
					return new Filter("PerfomDateTime", FilterOperator.GT, aDates[0]);
				} else if (oValue.operator === "TO" || oValue.operator === "TODATETIME") {
					return new Filter("PerfomDateTime", FilterOperator.LT, aDates[0]);
				}
				return new Filter("PerfomDateTime", FilterOperator.BT, aDates[0], aDates[1]);
			} else {
				// Reset the curretnly applied filters
				return [];
			}
		},
        onPressFooterBtn:function(oEvent){
            if (!this.oDefaultDialog) {
				this.oDefaultDialog = new Dialog({
                    contentHeight:"500px",
                    contentWidth:"500px",
					title: "Available Products",
                    content:[new sap.m.Page({showHeader:false,content:[new sap.m.Text({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}).addStyleClass("sapUiContentPadding")
                        
                    ],
					beginButton: new Button({
						type: "Emphasized",
						text: "OK",
						press: function () {
							this.oDefaultDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function () {
							this.oDefaultDialog.close();
						}.bind(this)
					})
				});

				// to get access to the controller's model
				this.getView().addDependent(this.oDefaultDialog);
			}

			this.oDefaultDialog.open();
        },
        onSelectIconTabHeader:function(oEvent){
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            if (sSelectedKey === 'table'){
                this.TableFragment ??= this.loadFragment({
					name: "ui.template.fragment.TableFragment",
					controller: sap.ui.controller("ui.template.controller.TableFragment") 
				  })
            }
        }
    });
});
