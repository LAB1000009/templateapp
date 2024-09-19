sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

    return {
        /**
         * Provides runtime info for the device the UI5 app is running on as JSONModel
         */
        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        },
        
        _dateFormatter: function(oDate) {
            return DateFormat.getDateTimeInstance({pattern: "MMMM dd YY, hh:mm:ss"}).format(oDate);
        },
        formatCurrentLocationText: function(selectedTab, selectedCockpit, selectedCardDetails) {
            var locationText = selectedTab || ""; 
        
            if (selectedCockpit) {
                locationText += " / " + selectedCockpit;
            }
        
            if (selectedCardDetails) {
                locationText += " / " + selectedCardDetails;
            }
        
            
            if (!locationText) {
                locationText = "Super portable deluxe"; 
            }
        
            return locationText;
        }
        
    };

});