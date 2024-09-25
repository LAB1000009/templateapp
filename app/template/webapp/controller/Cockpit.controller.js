sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    "use strict";

    var BaseController = Controller.extend("ui.template.controller.Cockpit", {

        onInit: function() {},

        getPrefixedControl: function(id) {
            return this.getView().byId("Cockpit--" + id);
        },

        _loadCockpitDetailsFragment: async function(oEvent) {
            var oSelectedCardDetails = oEvent.getParameters().listItem.getBindingContext().getObject().cardTitle;
            this.getView().getModel("treeModel").setProperty("/selectedCardDetails", oSelectedCardDetails);
            this.getView().getModel("treeModel").setProperty("/cockpitDetailsCardVisible", true);
        },

        _initializeFragment: async function(sSelectedKey) {
            const oFragment = await sap.ui.core.Fragment.load({
                id: this.createId(sSelectedKey),
                name: "ui.template.view.fragment." + sSelectedKey,
                controller: this
            });
            return oFragment;
        },

        _addFragmentToView: function(sSelectedKey, oFragment) {
            oFragment.setModel(this.getView().getModel());
            this.getView().byId("Cockpit--responsiveSplitter").getRootPaneContainer().addPane(oFragment);
        },

        onPressFinanzenCard: async function(oEvent) {
            var oSelectedCard = oEvent.getSource().getBindingContext().getObject().Title;
            this.getView().getModel("treeModel").setProperty("/selectedTileName", oSelectedCard);
            this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible", true);
            this.getView().getModel("treeModel").setProperty("/selectedCockpit", oSelectedCard);

            var oSelectedItem = this.getView().byId("Cockpit--cardDetailsList").getSelectedItem();
            if (oSelectedItem) {
                var oSelectedCardDetails = oSelectedItem.getBindingContext().getObject().cardTitle;
                this.getView().getModel("treeModel").setProperty("/selectedCardDetails", oSelectedCardDetails);
            }
        },

        onPressCloseDetailsPalelBtn: function() {
            this.getView().getModel("treeModel").setProperty("/cockpitDetailsVisible", false);
            this.getView().getModel("treeModel").setProperty("/selectedCardDetails", '');
            this.getView().getModel("treeModel").setProperty("/selectedCockpit", '');
        }
    });

    return BaseController;
});
