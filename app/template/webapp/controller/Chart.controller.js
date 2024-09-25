sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var Controller = Controller.extend("ui.template.controller.Chart", {

        onInit: function(oTemplateController) {
            this.oBaseController = oTemplateController;
        },
        
        getPrefixedControl: function(id) {
            return this.getView().byId("Chart--" + id);
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
