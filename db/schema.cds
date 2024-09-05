namespace riskmanagement;

using {
    managed,
    cuid,
    User,
    sap.common.CodeList
} from '@sap/cds/common';

entity Risks : cuid, managed {
    title                    : String(100);
    owner                    : String;
    prio                     : Association to Priority;
    descr                    : String;
    miti                     : Association to Mitigations;
    impact                   : Integer;
    // bp : Association to BusinessPartners;
    virtual criticality      : Integer;
    virtual PrioCriticality  : Integer;
    changeLogs               : Composition of many ChangeLog on changeLogs.risk = $self;
}

entity Mitigations : cuid, managed {
    descr    : String;
    owner    : String;
    timeline : String;
    risks    : Association to many Risks on risks.miti = $self;
}

entity Priority : CodeList {
    key code : String enum {
        high   = 'H';
        medium = 'M';
        low    = 'L';
    };
}

view ListOfRisks as select from Risks {
    ID,
    title,
    owner
}

entity ChangeLog : cuid, managed {
    changeDate : DateTime;
    changedBy  : String;
    changeType : String;
    changeNote : String;
    risk       : Association to Risks;
}


entity TableEntity : cuid, managed {
    EEID            : String(10);          // Employee ID
    FullName        : String(100);         // Full name of the employee
    JobTitle        : String(50);          // Job title
    Department      : String(50);          // Department
    BusinessUnit    : String(100);         // Business unit
    Gender          : String(10);          // Gender
    Ethnicity       : String(30);          // Ethnicity
    Age             : Integer;             // Age
    HireDate        : Date;                // Hire date
    AnnualSalary    : Decimal(15,2);       // Annual salary with precision
    Bonus           : Decimal(5,2);        // Bonus in percentage
    Country         : String(50);          // Country
    City            : String(50);          // City
    ExitDate        : Date;                // Exit date (nullable)
}


entity CommentEntity : cuid, managed {
    Author        : String;       
    AuthorPicUrl  : String;       
    Type          : String;       
    Date          : DateTime;     
    Text          : String;       
}
entity SupportContact : cuid {
    pageId        : String(100);
    header        : String(255);
    title         : String(255);
    titleUrl      : String(255);
    description   : String(255);
    icon          : String(255);
    displayShape  : String(50);
    heading       : String(255);
    label         : String(255);
    value         : String(255);
    url           : String(255);
    elementType   : String(50);
    pageLinkId    : String(100);
    emailSubject  : String(255);
    target        : String(50);
}

entity Cards {
    key ID          : UUID;
    Title           : String(255);
    Icon            : String(255);
    MainValue       : Decimal(10,2);
    MainValueUnit   : String(10);
    SubTitle        : String(255);
    Comparison1     : String(50);
    Comparison2     : String(50);
    Status1Value    : Decimal(10,2);
    Status1State    : String(20);
    Status2Value    : Decimal(10,2);
    Status2State    : String(20);
}






