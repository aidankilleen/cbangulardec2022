export class Message {

    // member variables
    public title: string;
    public text: string;
    public important: boolean = false;

    // member functions
    constructor(title: string, 
                text: string, 
                important: boolean) {
        this.title = title;
        this.text = text;
        this.important = important;
    }

}