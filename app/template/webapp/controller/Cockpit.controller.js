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
    onPressFinanzenCard: async function () {
        this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible",true)
        if(this.CockpitDetailsFragment){
            return;
        }
        this._loadCockpitDetailsFragment()
            .then((oFragment) => {
                debugger;
        oFragment.setModel(this.getView().getModel());
        this.getView().addDependent(oFragment);
       // this.getView().byId("cockpitDetailsPanel").addContent(oFragment)
        //this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible",true)
            });
    },

});

return Controller;

});
