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
    TransactionType : String(50);
    PerfomDateTime  : Timestamp;
    Amount          : Decimal(10,2);
    CurrencyCode    : String(3);
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






