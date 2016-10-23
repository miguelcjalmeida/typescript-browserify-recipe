import {Writter} from './writter'

let element = <HTMLElement>document.getElementById("output");

let writter = new Writter(element);

writter.write("this");
writter.write("is");
writter.write("cool");
writter.write("!");