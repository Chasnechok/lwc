import { LightningElement, api } from 'lwc'
import userID from '@salesforce/user/Id'

const MOCK_ID = '0053N000006hOlKQAU'

export default class UserInfo extends LightningElement {
    recordId = MOCK_ID || userID

    isEditModeEnabled = false

    handleEditModeSwitch() {
        this.isEditModeEnabled = !this.isEditModeEnabled
    }
}
