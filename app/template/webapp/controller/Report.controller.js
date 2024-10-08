sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("ui.template.controller.Table", {

        onInit: function () {
            var oData = {
                items: [
                    { Owner: "Steve Otieno", Objective: "Q1 Report", DataOfCreation: "2023-01-15", Version: "1.0", ReportDesigner: "Jane Smith" },
                    { Owner: "Anna Smith", Objective: "Annual Summary", DataOfCreation: "2023-01-20", Version: "2.1", ReportDesigner: "John Doe" }
                ]
            };

            var oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "reportModel");
        },
        openIFrameDialog: function (oEvent) {
            const oFragment =  sap.ui.core.Fragment.load({
                id: this.createId("iFrame"),
                name: "ui.template.view.fragment.iFrame",
                controller: this
            }).then(function(oFragment){
                this.getView().addDependent(oFragment);
                oFragment.open();
            }.bind(this))
        },
        onOpenLink: function () {
            window.open("https://sapui5.hana.ondemand.com/sdk", "_blank");
        },
        onCloseFooterDialog: function (oEvent) {
            oEvent.getSource().getParent().close();
        }
    });

    return Controller;

});
