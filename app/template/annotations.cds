using RiskService as service from '../../srv/risk-service';
annotate service.TableEntity with @(
    UI.Chart : {
        $Type : 'UI.ChartDefinitionType',
        ChartType : #Column,
        Dimensions : [
            Department
        ],
       
        Measures : [
            AnnualSalary
        ],
       
    },
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'FullName',
            Value : FullName,
            ![@HTML5.CssDefaults] : {width : '10rem'}
        },
        
          
        {
            $Type : 'UI.DataField',
            Label : 'JobTitle',
            Value : JobTitle,
            ![@HTML5.CssDefaults] : {width : '10rem'}
        },
          {
            $Type : 'UI.DataField',
            Label : 'Department',
            Value : Department,
            ![@HTML5.CssDefaults] : {width : '10rem'}
        },
          {
            $Type : 'UI.DataField',
            Label : 'BusinessUnit',
            Value : BusinessUnit,
            ![@HTML5.CssDefaults] : {width : '10rem'}
        },
        {
            $Type : 'UI.DataField',
            Label : 'Gender',
            Value : Gender,
            ![@HTML5.CssDefaults] : {width : '5rem'}
        },
        {
            $Type : 'UI.DataField',
            Label : 'Ethnicity',
            Value : Ethnicity,
            ![@HTML5.CssDefaults] : {width : '5rem'}
        },
        {
            $Type : 'UI.DataField',
            Label : 'Age',
            Value : Age,
            ![@HTML5.CssDefaults] : {width : '5rem'}
        },
        {
            $Type : 'UI.DataField',
            Label : 'HireDate',
            Value : HireDate,
            ![@HTML5.CssDefaults] : {width : '15rem'}
        },
        {
            $Type : 'UI.DataField',
            Label : 'ExitDate',
            Value : ExitDate,
            ![@HTML5.CssDefaults] : {width : '15rem'}
        },
      
    ],
    UI.SelectionFields : [
        Country,
        City,
        Department,
        BusinessUnit,
        Ethnicity
    ]
);
annotate service.cardDetails with @(
    UI.Chart : {
        $Type : 'UI.ChartDefinitionType',
        ChartType : #Column,
        Dimensions : [
            cardID, cardTitle, YTDValue
        ],
       
        Measures : [
           BUDvsYTDValue, StatusState
        ]
       
    }
);


