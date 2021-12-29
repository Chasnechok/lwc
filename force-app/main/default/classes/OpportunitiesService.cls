public with sharing class OpportunitiesService {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> fetchAll(){
        return [
            Select Id, Name, Category__c, DateCreated__c, CloseDate, StageName
            From Opportunity
            ];
    }
}
