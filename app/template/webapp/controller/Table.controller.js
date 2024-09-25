sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/date/UI5Date',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, UI5Date, Filter, FilterOperator) {
    "use strict";

    function getIncrementedDateFromToday(iDays, iMonths, iYears) {
        var oResultingDate = UI5Date.getInstance();
        oResultingDate.setFullYear(oResultingDate.getFullYear() + iYears);
        oResultingDate.setMonth(oResultingDate.getMonth() + iMonths);
        oResultingDate.setDate(oResultingDate.getDate() + iDays);
        return oResultingDate;
    }

    var Controller = Controller.extend("ui.template.controller.Table", {

        onInit: function(oTemplateController) {
            this.oBaseController = oTemplateController;
        },

        onChange: function(oEvent) {
            var oDynamicDateRange = oEvent.oSource,
                bValid = oEvent.getParameter("valid"),
                oTableItemsBinding, oValue, oTable, oFilter;

            if (bValid) {
                oTable = this.getView().byId('Table--payments-table');
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
                var aDates = oValue.toDates();
                if (oValue.operator === "FROM" || oValue.operator === "FROMDATETIME") {
                    return new Filter("PerfomDateTime", FilterOperator.GT, aDates[0]);
                } else if (oValue.operator === "TO" || oValue.operator === "TODATETIME") {
                    return new Filter("PerfomDateTime", FilterOperator.LT, aDates[0]);
                }
                return new Filter("PerfomDateTime", FilterOperator.BT, aDates[0], aDates[1]);
            }
            return [];
        },

        onBeforeRebind: function(oEvent) {
            var oDateFilter = this.oBaseController.oDateFilter;
            if (oDateFilter) {
                var bindingParams = oEvent.getParameters().bindingParams;
                bindingParams.filters.push(oDateFilter);
            }
        }
    });

    return Controller;
});
