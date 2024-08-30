sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device'
], function(Controller, JSONModel, Device) {
"use strict";

var Controller = Controller.extend("ui.template.controller.Comment", {
    
    onInit : function (oTemplateController) {
       
       
    },
    getPrefixedControl: function(id) {
        return this.getView().byId("Content--" + id);
    },
});

return Controller;

});
