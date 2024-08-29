using { riskmanagement as rm } from '../db/schema';

@path: 'service/risk'
service RiskService {

    @cds.redirection.target: 'RiskService.Risks'
    entity Risks as projection on rm.Risks;
    annotate Risks with @odata.draft.enabled;

    entity Mitigations as projection on rm.Mitigations;
    annotate Mitigations with @odata.draft.enabled;

    entity ListOfRisks as projection on rm.ListOfRisks;

    entity ChangeLog as projection on rm.ChangeLog;
    entity TableEntity as projection on rm.TableEntity;
}
