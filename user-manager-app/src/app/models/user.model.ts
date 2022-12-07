export class User {

    constructor(public id: number = -1, 
                public name: string = "",
                public email: string = "", 
                public active: boolean = false) {
    }
}