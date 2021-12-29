import { LightningElement, wire } from 'lwc'
import fetchOpportunities from '@salesforce/apex/OpportunitiesService.fetchAll'

export default class OpportunitiesCustomTable extends LightningElement {
    tableData = []
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
