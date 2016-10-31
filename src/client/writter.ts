export class Writter {
    constructor (private outputElement : HTMLElement){}

    write(text:string){
        this.outputElement.innerText += text;
    }
}