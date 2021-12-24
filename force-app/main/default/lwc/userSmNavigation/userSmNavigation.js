import { LightningElement } from 'lwc'

export default class UserSmNavigation extends LightningElement {
    constructor() {
        super()
        this.updateCurrentTab()
    }

    currentTab

    handleNavigation(event) {
        this.updateCurrentTab(event.target.dataset.nav)
    }

    updateCurrentTab(code) {
        this.currentTab = code || 'myprofile'
        this.tabs = this.tabs.map((tab) => {
            tab.selected = tab.code == this.currentTab
            return tab
        })
    }

    get isProfileTab() {
        return this.currentTab == 'myprofile'
    }

    tabs = [
        {
            name: 'Můj profile',
            code: 'myprofile',
        },
        {
            name: 'Nastavení',
            code: 'settings',
        },
        {
            name: 'Statistiky',
            code: 'stats',
        },
        {
            name: 'Dokumenty',
            code: 'docs',
        },
        {
            name: 'ČNB',
            code: 'cnb',
        },
        {
            name: 'Sazby',
            code: 'sazby',
        },
        {
            name: 'Můj tým',
            code: 'myteam',
        },
    ]
}
