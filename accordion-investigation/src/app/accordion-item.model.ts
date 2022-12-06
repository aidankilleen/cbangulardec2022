export class AccordionItem {


    constructor(public title: string, 
                public content: string, 
                public expanded: boolean) {

    }


    /*
    The above is equivalent to the following:

    public title: string;
    public ntent: string;
    public expanded: boolean;co

    constructor(title: string, 
                content: string, 
                expanded: boolean) {
        this.title = title;
        this.content = content;
        this.expanded = expanded;
    }
    */

}