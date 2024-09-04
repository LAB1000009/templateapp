sap.ui.define([
    'sap/ui/core/mvc/Controller'
    
], function(Controller, BindingMode, JSONModel, FlattenedDataset, FeedItem, ChartFormatter, Format, Device, History) {
"use strict";

var Controller = Controller.extend("ui.template.controller.Cockpit", {

    onInit: function(oTemplateController) {
        
    },
    
    getPrefixedControl: function(id) {
        return this.getView().byId("Cockpit--" + id);
    }
});

return Controller;

});
