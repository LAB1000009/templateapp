sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
"use strict";

var BaseController = Controller.extend("ui.template.controller.Cockpit", {

    onInit: function(oTemplateController) {
       
    },
    
    getPrefixedControl: function(id) {
        return this.getView().byId("Cockpit--" + id);
    },
    _loadCockpitDetailsFragment: async function () {
        // this._fragments = this._fragments || {};
    
        // if (!this._fragments["CockpitDetails"]) {
        //     const oController = this;
        //     const oFragment = await this._initializeFragment("CockpitDetails", oController);
    
        //     this._addFragmentToView("CockpitDetails", oFragment);
    
        //     this._fragments["CockpitDetails"] = oFragment;
    
        //     if (typeof oController.onInit === 'function') {
        //         oController.onInit();
        //     }
        // }
        // this._fragments["CockpitDetails"].bindObject(this.getView().byId("Cockpit--cardDetailsList").getSelectedItem().getBindingContext().getPath())
        // return this._fragments["CockpitDetails"];
    },
    
    _initializeFragment: async function (sSelectedKey, oController) {
        const oFragment = await sap.ui.core.Fragment.load({
            id: this.createId(sSelectedKey),
            name: "ui.template.fragment." + sSelectedKey,
            controller: this
        });
        return oFragment;
    },
    
    _addFragmentToView: function (sSelectedKey, oFragment) {
        oFragment.setModel(this.getView().getModel());
       // this.getView().addDependent(oFragment);
       this.getView().byId("Cockpit--responsiveSplitter").getRootPaneContainer().addPane(oFragment)
    },
    onPressFinanzenCard: async function (oEvent) {
        this.getView().getModel("treeModel").setProperty("/selectedTileName", oEvent.getSource().getBindingContext().getObject().Title);
        this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible", true);
    },
    onPressCloseDetailsPalelBtn:function(){
        this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible",false);
    }

});

return BaseController;

});
