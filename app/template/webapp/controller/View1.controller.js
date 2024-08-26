sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("ui.template.controller.View1", {
        onInit: function () {
            var oTreeModel = new JSONModel({
                //////////////
                headerTitle : "HR template",
                headerSubTitle : "HR dashboard template from Mosec Solutions",
                headerActDate : "Date: 26.08.2024",
                headerCurrUser : "User: Steve Otieno",
                headerIconSrc : "templateapp\img\mosec_logo.png",
                /////////////////////////
                footerCopyright : "Copyright© 2024",
                footerClass : "Templates",
                footerPO : "Steve Otieno",
                footerDetails : "Dashboard details",
                ////////////////
                showSideContent:false
    
            });
            this.getView().setModel(oTreeModel, "treeModel");
        }
    });
});
