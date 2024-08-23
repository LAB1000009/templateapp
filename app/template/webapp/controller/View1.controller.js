sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ui.template.controller.View1", {
        onInit: function () {
            var oTreeModel = new JSONModel({
                headerTitle : "Mosec"
    
            });
            this.getView().setModel(oTreeModel, "treeModel");
        }
    });
});
