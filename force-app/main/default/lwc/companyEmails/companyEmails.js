import { LightningElement } from 'lwc'

export default class CompanyEmails extends LightningElement {
    emails = [
        {
            email: 'produkce@holver.cz',
            description: 'obchodní případy k evidenci',
            get link() {
                return 'mailto:' + this.email
            },
        },
        {
            email: 'intervence@holver.cz',
            description: 'vše co se týká intervencí',
            get link() {
                return 'mailto:' + this.email
            },
        },
        {
            email: 'reklamace@holver.cz',
            description: 'reklamace provizí',
            get link() {
                return 'mailto:' + this.email
            },
        },
        {
            email: 'pristupy@holver.cz',
            description: 'požadavky na vygenerování přístupů do aplikací/sjednávačů/systému produktových partnerů',
            get link() {
                return 'mailto:' + this.email
            },
        },
        {
            email: 'spoluprace@holver.cz',
            description: 'nová spolupráce/rozšíření, odbornosti ČNB, AML',
            get link() {
                return 'mailto:' + this.email
            },
        },
        {
            email: 'marketing@holver.cz',
            description: 'pravidla užívání loga a propagačních materiálů holver, informace k eventům',
            get link() {
                return 'mailto:' + this.email
            },
        },
    ]
}
