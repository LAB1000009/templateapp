sap.ui.define([
    'sap/ui/core/mvc/Controller'
    
], function(Controller) {
"use strict";

var Controller = Controller.extend("ui.template.controller.Cockpit", {

    onInit: function(oTemplateController) {
        
    },
    
    getPrefixedControl: function(id) {
        return this.getView().byId("Cockpit--" + id);
    },
    _loadCockpitDetailsFragment: async function () {
        this.CockpitDetailsFragment = await sap.ui.core.Fragment.load({
            id: this.createId("CockpitDetails"),
            name: "ui.template.fragment.CockpitDetails",
            controller: this
        });
        return this.CockpitDetailsFragment;
    },
    onPressFinanzenCard: async function (oEvent) {
        this.getView().getModel("treeModel").setProperty("/selectedTileName",oEvent.getSource().getBindingContext().getObject().Title)
        this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible",true)
        if(this.CockpitDetailsFragment){
            return;
        }
        this._loadCockpitDetailsFragment()
            .then((oFragment) => {
                debugger;
        oFragment.setModel(this.getView().getModel());
            this.getView().addDependent(oFragment);
        });
    },
    onPressCloseDetailsPalelBtn:function(){
        this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible",false);
    }

});

return Controller;

});
