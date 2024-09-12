using RiskService as service from '../../srv/risk-service';
annotate service.TableEntity with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'EEID',
                Value : EEID,
            },
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
                Label : 'AnnualSalary',
                Value : AnnualSalary,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Bonus',
                Value : Bonus,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Country',
                Value : Country,
            },
            {
                $Type : 'UI.DataField',
                Label : 'City',
                Value : City,
            },
            {
                $Type : 'UI.DataField',
                Label : 'ExitDate',
                Value : ExitDate,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'EEID',
            Value : EEID,
        },
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
    ],
    UI.SelectionFields : [
        Age,
        Bonus,
        AnnualSalary,
        BusinessUnit,
        City,
        Country,
        Department,
        EEID,
        Ethnicity,
    ],
);

annotate service.TableEntity with {
    Age @Common.Label : 'Age'
};

annotate service.TableEntity with {
    Bonus @Common.Label : 'Bonus'
};

annotate service.TableEntity with {
    AnnualSalary @Common.Label : 'AnnualSalary'
};

annotate service.TableEntity with {
    BusinessUnit @Common.Label : 'BusinessUnit'
};

annotate service.TableEntity with {
    City @Common.Label : 'City'
};

annotate service.TableEntity with {
    Country @Common.Label : 'Country'
};

annotate service.TableEntity with {
    Department @Common.Label : 'Department'
};

annotate service.TableEntity with {
    EEID @Common.Label : 'EEID'
};

annotate service.TableEntity with {
    Ethnicity @Common.Label : 'Ethnicity'
};

