
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/IconPool",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/Text",
    
],
    
    function (Controller, JSONModel, IconPool, Dialog, Button, mobileLibrary, List, StandardListItem, Text) {
        "use strict";

        return Controller.extend("ui.template.controller.Dashboard", {
            onInit: function () {
                var oListModel = new JSONModel({
                 
    
                });
                this.getView().setModel(oListModel, "listModel");
            },
            onResizableDialogPress: function () {
                if (!this.oResizableDialog) {
                    this.oResizableDialog = new Dialog({
                        title: "Group IT GOALS 2023:",
                        contentWidth: "550px",
                        contentHeight: "330px",
                        resizable: true,
                        content: [
                            new sap.m.IconTabBar({
                                backgroundDesign: "Transparent",
                                tabDensityMode:"Compact",

                                items:
                                [
                                    new sap.m.IconTabFilter({
                                        text:"English",
                                        content:[new sap.m.VBox({
                                            items:[
                                                new sap.m.Label({text:"Goal1:"}),
                                                new sap.m.Input({value:"| Reduce ACTUAL COSTS by 5% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal2:"}),
                                                new sap.m.Input({value:"| Reduce OPEX LICENSE Costs by 10% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal3:"}),
                                                new sap.m.Input({value:"| Reduce ACTUAL COSTS by 5% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal4:"}),
                                                new sap.m.Input({value:"| Reduce OPEX LICENSE Costs by 10% by Dec. 2023"}),
                                            ]
                                        })]
                                    }),
                                    new sap.m.IconTabFilter({
                                        text:"German",
                                        content:[new sap.m.VBox({
                                            items:[
                                                new sap.m.Label({text:"Goal1:"}),
                                                new sap.m.Input({value:"| Reduce ACTUAL COSTS by 5% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal2:"}),
                                                new sap.m.Input({value:"| Reduce OPEX LICENSE Costs by 10% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal3:"}),
                                                new sap.m.Input({value:"| Reduce ACTUAL COSTS by 5% by Dec. 2023"}).addStyleClass("sapUiSmallMarginBottom"),
                                                new sap.m.Label({text:"Goal4:"}),
                                                new sap.m.Input({value:"| Reduce OPEX LICENSE Costs by 10% by Dec. 2023"}),
                                            ]
                                        })]
                                    })
                            ]
                            }).addStyleClass("sapUiSizeCompact")
                        ],
                        beginButton: new Button({
                            text: "Save",
                            press: function () {
                                this.oResizableDialog.close();
                            }.bind(this)
                        }),
                        endButton: new Button({
                            text: "Close",
                            press: function () {
                                this.oResizableDialog.close();
                            }.bind(this)
                        })
                    }).addStyleClass("sapUiSizeCompact");
    
                    //to get access to the controller's model
                    this.getView().addDependent(this.oResizableDialog);
                }
    
                this.oResizableDialog.open();
            },
            onNavigate:function(oEvent){
                
                this.getOwnerComponent().getRouter().navTo("KPIOverview",{kpiid:"12"}, false);
            }
            // onPressPersonalCard:function(oEvent){
            //     if(!this.oPersonalCardPopover){
            //     this.oPersonalCardPopover=new sap.m.ResponsivePopover({
            //         contentWidth:"280px",
            //         contentHeight:"auto",
            //         placement:"Bottom",
            //         offsetX:40,
            //         showHeader:false,
            //         showArrow:false,
            //         content:[
            //             new sap.m.List({
            //                 items:[
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"Unfall"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"Berufsunfall"}),
            //                                             new sap.m.Text({text:"Nich Berufsunfall"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"0"}),
            //                                                 new sap.m.Title({text:"0"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://pharmacy",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }),
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"Krankheitsbedingter Ausfall"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"240"}),
            //                                                 new sap.m.Title({text:"66"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
                                                            
            //                                                 // new sap.m.ObjectStatus({text:"", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-22%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://pending",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }),
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"Bezahait Uberzeit"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"542"}),
            //                                                 new sap.m.Title({text:"42"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-7%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://lead",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"Geleistete Uberstunden"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"242"}),
            //                                                 new sap.m.Title({text:"65"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-21%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://future",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"Fluktuationsquote"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"2.9%"}),
            //                                                 new sap.m.Title({text:"3.2%"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-3.2%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://performance",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"O Betriebszugehorigkeit"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"2.75"}),
            //                                                 new sap.m.Title({text:"0.16"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-5.5%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://company-view",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"O Alter"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"39.9"}),
            //                                                 new sap.m.Title({text:"0.2"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-0.5%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://group",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                 ]
            //             })
            //         ]
            //     });
            // }
            //     this.oPersonalCardPopover.openBy(oEvent.getSource());
            // },
            // onPressFinanzenCard:function(oEvent){
            //     if(!this.oFinanzenCardPopover){
            //     this.oFinanzenCardPopover=new sap.m.ResponsivePopover({
            //         contentWidth:"280px",
            //         contentHeight:"auto",
            //         placement:"Bottom",
            //         offsetX:40,
            //         showHeader:false,
            //         showArrow:false,
            //         content:[
            //             new sap.m.List({
            //                 items:[
                              
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"IT FTE"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"YTD AM"}),
            //                                             new sap.m.Text({text:"BUD vs YTD"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"134"}),
            //                                                 new sap.m.Title({text:"14.2"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[+9.6%]", state:"Success"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://pending",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     justifyContent:"SpaceBetween",
            //                                     width:"46%",
            //                                     items:[
            //                                         new sap.m.Title({text:"IT OPEX"}).addStyleClass("sapUiTinyMarginBegin"),
            //                                         new sap.m.Title({text:"12M"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"2.9%"}),
            //                                                 new sap.m.Title({text:"3.2%"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-3.2%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://performance",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"O Betriebszugehorigkeit"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"2.75"}),
            //                                                 new sap.m.Title({text:"0.16"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-5.5%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://company-view",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                     new sap.m.CustomListItem({
            //                         content:[new sap.m.VBox({
            //                             items:[
            //                                 new sap.m.HBox({
            //                                     items:[
            //                                         new sap.m.Title({text:"O Alter"}).addStyleClass("sapUiTinyMarginBegin")
            //                                     ]
            //                                 }),
            //                                 new sap.m.HBox({
            //                                     justifyContent: "SpaceBetween",
            //                                     items:[
            //                                         new sap.m.VBox({
            //                                         justifyContent:"Center",    
            //                                         items:[
            //                                             new sap.m.Text({text:"AM"}),
            //                                             new sap.m.Text({text:"AM vs VM"})
            //                                         ]
            //                                     }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.m.Title({text:"39.9"}),
            //                                                 new sap.m.Title({text:"0.2"})
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"End", 
            //                                             items:[
            //                                                 // new sap.m.ObjectStatus({text:"[0%]", state:"Success"}).addStyleClass("boldObjectStatus"),
            //                                                 new sap.m.ObjectStatus({text:"[-0.5%]", state:"Error"}).addStyleClass("boldObjectStatus sapUiTinyMarginBottom")
            //                                             ]
            //                                         }),
            //                                         new sap.m.VBox({
            //                                             justifyContent:"Center", 
            //                                             items:[
            //                                                 new sap.ui.core.Icon({
            //                                                     src:"sap-icon://group",
            //                                                     size: "2.5rem"
            //                                                 })
            //                                             ]
            //                                         })
            //                                 ]
            //                                 })
                                                
            //                             ]
                                        
            //                         }).addStyleClass("sapUiTinyMargin")]
                                    
            //                     }), 
            //                 ]
            //             })
            //         ]
            //     });
            // }
            //     this.oFinanzenCardPopover.openBy(oEvent.getSource());
            // },
            // onPressFooterBtn:function(oEvent){
            //     this.oFooterPopover = new sap.m.ResponsivePopover({
            //         showHeader:false,
            //         showArrow:false,
            //         placement:"Top",
            //         content:[
            //             new sap.m.VBox({
            //                 items:[
            //                     new sap.m.HBox({
            //                         alignItems:"Center",
            //                         items:[
            //                             new sap.m.Title({text:"AM"}).addStyleClass("sapUiSmallMarginEnd"),
            //                             new sap.m.ObjectStatus({text:"Aktueller Monat", active:true})
            //                         ]
            //                     }),
            //                     new sap.m.HBox({
            //                         alignItems:"Center",
            //                         items:[
            //                             new sap.m.Title({text:"VM"}).addStyleClass("sapUiSmallMarginEnd"),
            //                             new sap.m.ObjectStatus({text:"Vergangenen Monat", active:true})
            //                         ]
            //                     })
            //                 ]
            //             })
            //         ]
            //     }).addStyleClass("sapUiSizeCompact sapUiContentPadding");
            //     this.oFooterPopover.openBy(oEvent.getSource());;
            // }
            
            
        });
    });
