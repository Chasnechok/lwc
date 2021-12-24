import { LightningElement } from 'lwc'
import fetchAllEvents from '@salesforce/apex/FullCalendarService.fetchAllEvents'

export default class DailyNotifications extends LightningElement {
    events
    isLoading = true
    connectedCallback() {
        fetchAllEvents()
            .then((results) => {
                this.isLoading = false
                this.events = results.filter((event) => {
                    const end = new Date(event.EndDate)
                    const start = new Date(event.ActivityDate)
                    const now = new Date()
                    return start <= now && now <= end
                })
            })
            .catch(console.log)
    }

    get isEmpty() {
        return !this.isLoading && (!this.events || !this.events.length)
    }
}
