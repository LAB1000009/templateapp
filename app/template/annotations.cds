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
        },
          
        {
            $Type : 'UI.DataField',
            Label : 'JobTitle',
            Value : JobTitle,
        },
          {
            $Type : 'UI.DataField',
            Label : 'Department',
            Value : Department,
        },
          {
            $Type : 'UI.DataField',
            Label : 'BusinessUnit',
            Value : BusinessUnit,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Gender',
            Value : Gender,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Ethnicity',
            Value : Ethnicity,
        },
        {
            $Type : 'UI.DataField',
            Label : 'Age',
            Value : Age,
        },
        {
            $Type : 'UI.DataField',
            Label : 'HireDate',
            Value : HireDate,
        },
        {
            $Type : 'UI.DataField',
            Label : 'ExitDate',
            Value : ExitDate,
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


