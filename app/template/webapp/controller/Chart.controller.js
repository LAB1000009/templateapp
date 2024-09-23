sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/BindingMode',
    'sap/ui/model/json/JSONModel',
    'sap/viz/ui5/data/FlattenedDataset',
    'sap/viz/ui5/controls/common/feeds/FeedItem',
    'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
    'sap/ui/Device',
    "sap/ui/core/routing/History"
    
], function(Controller, BindingMode, JSONModel, FlattenedDataset, FeedItem, ChartFormatter, Format, Device, History) {
"use strict";

var Controller = Controller.extend("ui.template.controller.Chart", {

    dataPath : "https://sapui5.hana.ondemand.com/test-resources/sap/viz/demokit/dataset/milk_production_testing_data/date_revenue_cost",

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

    onInit: function(oTemplateController) {
        this.oBaseController = oTemplateController;
    },
    
    getPrefixedControl: function(id) {
        return this.getView().byId("Chart--" + id);
    },
    onBeforeRebind: function(oEvent) {
        var oDateFilter = this.oBaseController.oDateFilter;
        if(oDateFilter){
            var bindingParams = oEvent.getParameters().bindingParams;
            bindingParams.filters.push(oDateFilter);
        }
    },
});

return Controller;

});
