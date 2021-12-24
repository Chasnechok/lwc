public with sharing class FullCalendarService {
    
    @AuraEnabled(cacheable=true)
    public static List<Event> fetchAllEvents(){
        return [
            Select Id, Subject, WhatId, WhoId, Description, EndDate, EndDateTime, OwnerId, ActivityDate, ActivityDateTime
            From Event
            ];
    }
}
