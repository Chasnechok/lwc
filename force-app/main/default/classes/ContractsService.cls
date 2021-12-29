public with sharing class ContractsService {
    @AuraEnabled(cacheable=true)
    public static List<Contract> fetchAll(){
        return [
            Select Id, Name, Status, CustomerSignedDate, StartDate, AccountId
            From Contract
            ];
    }
}
