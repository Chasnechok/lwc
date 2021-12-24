import { LightningElement } from 'lwc'

export default class PovinneSkoleni extends LightningElement {
    studies = [
        {
            id: 1,
            name: 'AML',
            done: true,
        },
        {
            id: 2,
            name: 'GDPR',
            done: false,
        },
        {
            id: 3,
            name: 'Kyberbezpečnost',
            done: true,
        },
    ]
}
