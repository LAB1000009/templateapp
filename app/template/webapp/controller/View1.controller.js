sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Dialog",
    "sap/m/Button",
    'sap/ui/core/date/UI5Date',
    'sap/m/DynamicDateRange',
    'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
],
function (Controller, JSONModel, Dialog, Button, UI5Date, DynamicDateRange, Filter, FilterOperator) {
    "use strict";
    function getIcrementedDateFromToday(iDays, iMonths, iYears) {
		var oResultingDate = UI5Date.getInstance();

		oResultingDate.setFullYear(oResultingDate.getFullYear() + iYears);
		oResultingDate.setMonth(oResultingDate.getMonth() + iMonths);
		oResultingDate.setDate(oResultingDate.getDate() + iDays);

		return oResultingDate;
	}
    var aPayments = [
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(-1, 0 ,0),
			Amount: 100.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-2, 0 ,0),
			Amount: 18.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, 0 ,0),
			Amount: 54.05,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-4, 0 ,0),
			Amount: 30.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-5, 0 ,0),
			Amount: 105.50,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, 0 ,0),
			Amount: 74.35,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-3, -1 ,0),
			Amount: 9.50,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-1, -1 ,0),
			Amount: 3.90,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(-5, -2 ,0),
			Amount: 200.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-4, -2 ,0),
			Amount: 153.80,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-9, 0 ,0),
			Amount: 5.30,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(-8, 0 ,0),
			Amount: 1.60,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: getIcrementedDateFromToday(0, -1 ,-1),
			Amount: 95.60,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: getIcrementedDateFromToday(0, 0 ,0),
			Amount: 400.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "ATM withdrawal",
			PerfomDateTime: UI5Date.getInstance(2021, 5, 9, 15, 15, 0),
			Amount: 50.00,
			CurrencyCode: "EUR"
		},
		{
			TransactionType: "payment on POS terminal",
			PerfomDateTime: UI5Date.getInstance(2021, 5, 8, 10, 15, 0),
			Amount: 22.34,
			CurrencyCode: "EUR"
		}
	];
    return Controller.extend("ui.template.controller.View1", {
        onInit: function () {
            this.oDialog ??=  this.loadFragment({
				name: "ui.template.fragment.Content"
			})
            .then(function(oFragment){
                this.getView().byId("contentPage").addContent(oFragment);
            }.bind(this))
            
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
                ////////////////
                showSideContent:false,
                payments:aPayments
    
            });
            this.getView().setModel(oTreeModel, "treeModel");
        },
        onChange: function(oEvent) {
			var oDynamicDateRange = oEvent.oSource,
				bValid = oEvent.getParameter("valid"),
				oTableItemsBinding, oValue, oTable, oFilter;

			if (bValid) {
				oTable = this.getView().byId("payments-table");
				oTableItemsBinding = oTable.getBinding("items");
				oValue = oEvent.getParameter("value");
				oFilter = this._createFilter(oValue);
				oTableItemsBinding.filter(oFilter, "Application");
				oDynamicDateRange.setValueState("None");
			} else {
				oDynamicDateRange.setValueState("Error");
			}
		},
        _createFilter: function(oValue) {
			if (oValue) {
				var aDates = DynamicDateRange.toDates(oValue);
				if (oValue.operator === "FROM" || oValue.operator === "FROMDATETIME") {
					return new Filter("PerfomDateTime", FilterOperator.GT, aDates[0]);
				} else if (oValue.operator === "TO" || oValue.operator === "TODATETIME") {
					return new Filter("PerfomDateTime", FilterOperator.LT, aDates[0]);
				}
				return new Filter("PerfomDateTime", FilterOperator.BT, aDates[0], aDates[1]);
			} else {
				// Reset the curretnly applied filters
				return [];
			}
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
    });
});
