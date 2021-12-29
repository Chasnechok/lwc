import { LightningElement, wire } from 'lwc'
import fetchContracts from '@salesforce/apex/ContractsService.fetchAll'

const COLUMNS = [
    { label: 'Název', fieldName: 'Name' },
    { label: 'Stav', fieldName: 'Status' },
    { label: 'Datum podpisu', fieldName: 'CustomerSignedDate' },
    { label: 'Datum vytvoření', fieldName: 'StartDate' },
    { label: 'Název společnosti', fieldName: 'AccountId' },
]

export default class Contracts extends LightningElement {
    columns = COLUMNS
    isLoading = true
    tableData = []
    @wire(fetchContracts)
    wiredSessions({ error, data }) {
        this.isLoading = false
        if (error) {
            throw new Error('Failed to retrieve contracts')
        }
        this.tableData = data
    }
}
