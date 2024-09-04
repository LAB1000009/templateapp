sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/date/UI5Date',
    'sap/m/DynamicDateRange',
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
    
], function(Controller, UI5Date, DynamicDateRange, Filter, FilterOperator) {
"use strict";

var Controller = Controller.extend("ui.template.controller.Support", {
    
    onInit : function (oTemplateController) {
        this.getView().byId("Support--supportContactForm").bindObject("/SupportContact('1')")
       
    }
});

return Controller;

});
