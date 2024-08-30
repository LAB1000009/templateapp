sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Button",
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	'sap/viz/ui5/format/ChartFormatter',
    'sap/viz/ui5/api/env/Format',
    'sap/ui/Device'
	
],
function (Controller, JSONModel, Dialog, Button, UI5Date, DynamicDateRange, Filter, FilterOperator,ChartFormatter, Format, Device) {
    "use strict";
	
    return Controller.extend("ui.template.controller.View1", {
		
        onInit: function () {
            this.aAppFragments={};
            this.oDialog ??= this.loadFragment({
				name: "ui.template.fragment.Content"
			  })
				.then((oFragment) => {
				  this.getView().byId("contentPage").addContent(oFragment);
				})
				.then(this._loadFragments.bind(this, "Chart"));
            
            var oTreeModel = new JSONModel({
                //////////////
                headerTitle : "HR template",
                headerSubTitle : "HR dashboard template from Mosec Solutions",
                headerActDate : new Intl.DateTimeFormat(['ban', 'id']).format(new Date()),
                headerCurrUser : "User: Steve Otieno",
                headerIconSrc : "templateapp\img\mosec_logo.png",
                /////////////////////////
                footerCopyright : "Copyright© 2024",
                footerClass : "Templates",
                footerPO : "Steve Otieno",
                footerDetails : "Dashboard details",
                ////////////////test
                showSideContent:false,
                payments:[]
    
            });
            this.getView().setModel(oTreeModel, "treeModel");
        },
       
        onPressFooterBtn:function(oEvent){
            if (!this.oDefaultDialog) {
				this.oDefaultDialog = new Dialog({
                    contentHeight:"500px",
                    contentWidth:"500px",
					title: "Available Products",
                    content:[new sap.m.Page({showHeader:false,content:[new sap.m.Text({text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit"})]}).addStyleClass("sapUiContentPadding")
                        
                    ],
					beginButton: new Button({
						type: "Emphasized",
						text: "OK",
						press: function () {
							this.oDefaultDialog.close();
						}.bind(this)
					}),
					endButton: new Button({
						text: "Close",
						press: function () {
							this.oDefaultDialog.close();
						}.bind(this)
					})
				});

				// to get access to the controller's model
				this.getView().addDependent(this.oDefaultDialog);
			}

			this.oDefaultDialog.open();
        },
        onSelectIconTabHeader: async function(oEvent) {  // Сделаем метод асинхронным
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            var oPage = await this._loadFragments(sSelectedKey);
            if(this.getView().byId("navCon").getCurrentPage() === this._fragments[sSelectedKey]){
                return
            }
            this.getView().byId("navCon").to(this._fragments[sSelectedKey])
            
        },
        
        _loadController: function(sSelectedKey) {
            var oController = sap.ui.controller("ui.template.controller." + sSelectedKey);
            oController.getView = this.getView.bind(this);
            oController.byId = this.getView().byId.bind(this.getView());
            return oController;
        },
        
        _initializeFragment: async function(sSelectedKey, oController) {
            const oFragment = await sap.ui.core.Fragment.load({
                id: this.createId(sSelectedKey),
                name: "ui.template.fragment." + sSelectedKey,
                controller: oController
            });
            oFragment.setModel(this.getView().getModel());
            this.getView().addDependent(oFragment);
            
            return oFragment;
        },
        
        _addFragmentToView: function(sSelectedKey, oFragment) {
            this.getView().addDependent(oFragment);
            this.getView().byId("navCon").addPage(oFragment);
        },
        
        _loadFragments: async function(sSelectedKey) {
            this._fragments = this._fragments || {};
        
            if (!this._fragments[sSelectedKey]) {
                const oController = this._loadController(sSelectedKey);
                const oFragment = await this._initializeFragment(sSelectedKey, oController);
                
                this._addFragmentToView(sSelectedKey, oFragment);
                this._fragments[sSelectedKey] = oFragment;
        
                if (typeof oController.onInit === 'function') {
                    oController.onInit();
                }
            }
        
            return this._fragments[sSelectedKey];
        }
        
        
        
        
        

        
    });
});
