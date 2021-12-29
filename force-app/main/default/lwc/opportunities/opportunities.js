import { LightningElement, wire } from 'lwc'
import fetchOpportunities from '@salesforce/apex/OpportunitiesService.fetchAll'

const COLUMNS = [
    { label: 'Název', fieldName: 'Name' },
    { label: 'Oblast', fieldName: 'Category__c' },
    { label: 'Datum vytvoření', fieldName: 'DateCreated__c' },
    { label: 'Stav', fieldName: 'StageName' },
    { label: 'Datum poslední aktivity', fieldName: 'CloseDate' },
]

export default class Opportunities extends LightningElement {
    tableData = []
    columns = COLUMNS
    isLoading = true

    @wire(fetchOpportunities)
    wiredSessions({ error, data }) {
        this.isLoading = false
        if (error) {
            throw new Error('Failed to retrieve contracts')
        }
        this.tableData = data
    }
}
