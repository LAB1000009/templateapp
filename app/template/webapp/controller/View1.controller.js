sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Button",
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/m/DynamicDateRange'
], function (Controller, JSONModel, Dialog, Button, Filter, FilterOperator, DynamicDateRange) {
    "use strict";

    return Controller.extend("ui.template.controller.View1", {

        onInit: function () {
            var oTreeModel = new JSONModel({
                cockpitDetailsVisible: false,
                headerTitle: "HR template",
                headerSubTitle: "HR dashboard template from Mosec Solutions",
                headerActDate: new Intl.DateTimeFormat(['ban', 'id']).format(new Date()),
                headerCurrUser: "User: Steve Otieno",
                headerIconSrc: "templateapp\\img\\mosec_logo.png",
                footerCopyright: "Copyright© 2024",
                footerClass: "Templates",
                footerPO: "Steve Otieno",
                footerDetails: "Dashboard details",
                showSideContent: false,
                selectedTab: "Chart",
                selectedCockpit: "",
                selectedCardDetails: "",
                cockpitDetailsCardVisible: false,
                payments: []
            });
            this.getView().setModel(oTreeModel, "treeModel");

            sap.ui.getCore().attachLocalizationChanged(function (oEvent) {
                var oChanges = oEvent.getParameter("changes");
                sap.ui.getCore().getConfiguration().setLanguage(oChanges.language);
            }.bind(this));
        },

        onSelectLanguage: function () {
            var sLanguage = this.getView().byId("language").getSelectedKey();
            sap.ui.getCore().getConfiguration().setLanguage(sLanguage);
        },

        onAfterRendering: function () {
            this.aAppFragments = {};
            this.oDialog ??= this.loadFragment({
                name: "ui.template.view.fragment.Content"
            })
                .then((oFragment) => {
                    this.getView().byId("contentPage").addContent(oFragment);
                })
                .then(this._loadFragments.bind(this, "Chart", true));
        },

        onPressFooterBtn: function (oEvent) {
            var oReportDialog = this._loadFragments("Report", false);
            oReportDialog.then((dialog) => {
                dialog.open();
            });
        },

        onSelectIconTabHeader: async function (oEvent) {
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var oPage = await this._loadFragments(sSelectedKey, true);
            if (this.getView().byId("navCon").getCurrentPage() === this._fragments[sSelectedKey]) {
                return;
            }
            this.getView().getModel("treeModel").setProperty("/selectedTab", sSelectedKey);
            this.getView().byId("navCon").to(this._fragments[sSelectedKey]);
        },

        _loadController: function (sSelectedKey) {
            var oController = sap.ui.controller("ui.template.controller." + sSelectedKey);
            oController.getView = this.getView.bind(this);
            oController.byId = this.getView().byId.bind(this.getView());
            return oController;
        },

        _initializeFragment: async function (sSelectedKey, oController) {
            const oFragment = await sap.ui.core.Fragment.load({
                id: this.createId(sSelectedKey),
                name: "ui.template.view.fragment." + sSelectedKey,
                controller: oController
            });
            oFragment.setModel(this.getView().getModel());
            this.getView().addDependent(oFragment);
            return oFragment;
        },

        _addFragmentToView: function (sSelectedKey, oFragment) {
            this.getView().addDependent(oFragment);
            this.getView().byId("navCon").addPage(oFragment);
        },

        onChange: function (oEvent) {
            var oDynamicDateRange = oEvent.oSource,
                bValid = oEvent.getParameter("valid"),
                oValue;

            if (bValid) {
                oValue = oEvent.getParameter("value");
                this.oDateFilter = this._createFilter(oValue);
                oDynamicDateRange.setValueState("None");
            } else {
                oDynamicDateRange.setValueState("Error");
            }
        },

        _createFilter: function (oValue) {
            if (oValue) {
                var aDates = DynamicDateRange.toDates(oValue);
                var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "yyyy-MM-dd'T'HH:mm:ss'Z'",
                    UTC: true
                });

                if (oValue.operator === "FROM" || oValue.operator === "FROMDATETIME") {
                    return new Filter("HireDate", FilterOperator.GT, oDateFormat.format(aDates[0]));
                } else if (oValue.operator === "TO" || oValue.operator === "TODATETIME") {
                    return new Filter("HireDate", FilterOperator.LT, oDateFormat.format(aDates[0]));
                }
                return new Filter("HireDate", FilterOperator.BT, oDateFormat.format(aDates[0]), oDateFormat.format(aDates[1]));
            }
            return [];
        },

        _loadFragments: async function (sSelectedKey, bSetInTab) {
            this._fragments = this._fragments || {};

            if (!this._fragments[sSelectedKey]) {
                const oController = this._loadController(sSelectedKey);
                const oFragment = await this._initializeFragment(sSelectedKey, oController);
                if (bSetInTab) {
                    this._addFragmentToView(sSelectedKey, oFragment);
                }
                this._fragments[sSelectedKey] = oFragment;
                if (typeof oController.onInit === 'function') {
                    oController.onInit(this);
                }
            }

            return this._fragments[sSelectedKey];
        }
    });
});
