using { riskmanagement as rm } from '../db/schema';

@path: 'service/risk'
service RiskService {

    @cds.redirection.target: 'RiskService.Risks'
    entity Risks2 as projection on rm.Risks;
    annotate Risks2 with @odata.draft.enabled;

    entity Mitigations as projection on rm.Mitigations;
    annotate Mitigations with @odata.draft.enabled;

    entity ListOfRisks as projection on rm.ListOfRisks;

    entity ChangeLog as projection on rm.ChangeLog;
    entity TableEntity as projection on rm.TableEntity;
    entity CommentEntity as projection on rm.CommentEntity;
    entity SupportContact as projection on rm.SupportContact;
    entity Cards as projection on rm.Cards;
    entity cardDetails as projection on rm.cardDetails;

    @odata.draft.enabled
    entity Items as projection on rm.Items;

    @cds.function
    function getItemsByQuantity(quantity: Integer) returns array of Items;

    @cds.action
    action createItem(title: String, descr: String, quantity: Integer) returns Items;
}
