import { LightningElement, api } from 'lwc'

const MOCK = [
    {
        category: 'Auta',
        ziskprovize: '18%',
        pecprovize: '14%',
    },
    {
        category: 'Neživot',
        ziskprovize: '18%',
    },
    {
        category: 'Život',
        ziskprovize: '175%',
        pecprovize: '5%',
    },
]

const columns = [
    { label: 'Kategorie', fieldName: 'category' },
    { label: 'Získatelská provize', fieldName: 'ziskprovize' },
    { label: 'Pečovatelská provize', fieldName: 'pecprovize' },
]

export default class Sazby extends LightningElement {
    tableData = MOCK
    columns = columns
}
