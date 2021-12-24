import { LightningElement, api, wire } from 'lwc'
import { getRecord } from 'lightning/uiRecordApi'
import NAME_FIELD from '@salesforce/schema/Contact.Name'

export default class EventItem extends LightningElement {
    @api activityDate
    @api activityDateEnd
    @api subject
    @api whoId

    relatedContact

    @wire(getRecord, { recordId: '$whoId', fields: [NAME_FIELD] })
    wiredRecord({ error, data }) {
        if (error) {
            return console.log(error)
        }
        this.relatedContact = data?.fields?.Name?.value
    }

    get formattedDate() {
        if (!this.activityDate || !this.activityDateEnd) return ''

        if (new Date(this.activityDate) < new Date(this.activityDateEnd)) {
            return `${this.activityDate} ⎯ ${this.activityDateEnd}`
        }
        return this.activityDateEnd
    }
}
