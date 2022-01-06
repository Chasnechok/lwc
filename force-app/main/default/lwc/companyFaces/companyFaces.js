import { LightningElement } from 'lwc'
import KRAMNY from '@salesforce/resourceUrl/kramny'
import REZAC from '@salesforce/resourceUrl/rezac'
import BECHNY from '@salesforce/resourceUrl/bechny'
import STICHAUEROVA from '@salesforce/resourceUrl/stichauerova'
import HAMPEJS from '@salesforce/resourceUrl/hampejs'
import JILKOVA from '@salesforce/resourceUrl/jilkova'

// Nešlo mi to nahrát z archivu
// import FACES from '@salesforce/resourceUrl/faces'

const DIVISIONS = [
    {
        type: 'Vedení společnosti',
        people: [
            {
                name: 'Mojmír Kramný',
                email: 'mojmir.kramny@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '778 705 088',
                role: 'ředitel',
                image: KRAMNY,
            },
            {
                name: 'Marek Řezáč',
                email: 'marek.rezac@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '728 202 648',
                role: 'provozní ředitel',
                image: REZAC,
            },
        ],
    },
    {
        type: 'Obchodní podpora',
        people: [
            {
                name: 'Daniel Bechný',
                email: 'daniel.bechny@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '777 623 499',
                role: 'podpora pojištění',
                image: BECHNY,
            },
            {
                name: 'Martina Štichauerová',
                email: 'martina.stichauerova@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '603 568 388',
                role: 'podpora úvěry, SS',
                image: STICHAUEROVA,
            },
            {
                name: 'Dalibor Hampejs',
                email: 'dalibor.hampejs@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '604 296 243',
                role: 'podpora investic',
                image: HAMPEJS,
            },
            {
                name: 'Eva Jílková',
                email: 'eva.jilkova@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '602 703 445',
                role: 'podpora informačního systému',
                image: JILKOVA,
            },
        ],
    },
    {
        type: 'Backoffice',
        people: [
            {
                name: null,
                email: 'backoffice@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '555 131 602',
                role: null,
                image: null,
            },
        ],
    },
    {
        type: 'Marketing',
        people: [
            {
                name: 'Petra Kunzová',
                email: 'marketing@holver.cz',
                get emailLink() {
                    return 'mailto:' + this.email
                },
                phone: '733 544 822',
                role: 'marketing',
                image: null,
            },
        ],
    },
]

export default class CompanyFaces extends LightningElement {
    divisions = DIVISIONS
}
