import { LightningElement } from 'lwc'
import userID from '@salesforce/user/Id'

const MOCK_ID = '0053N000006hOlKQAU'

export default class KlientiUserInfo extends LightningElement {
    recordId = MOCK_ID || userID

    isEditModeEnabled = false

    handleEditModeSwitch() {
        this.isEditModeEnabled = !this.isEditModeEnabled
    }

    get ownerName() {
        return this.owner.data.fields.Name.value
    }

    get ownerId() {
        return this.owner.data.fields.Id.value
    }
}
