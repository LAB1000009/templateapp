sap.ui.define([
    'sap/ui/core/mvc/Controller'

], function (Controller) {
    "use strict";

    var Controller = Controller.extend("ui.template.controller.Support", {

        onInit: function (oTemplateController) {
            this.getView().byId("Support--supportContactForm").bindObject("/SupportContact('1')")
        }
    });

    return Controller;

});
