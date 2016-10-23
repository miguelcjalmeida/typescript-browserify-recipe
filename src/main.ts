import {Writter} from './writter'

let element = document.getElementById("output");

if(element != null) {
    let writter = new Writter(element);

    writter.write("this");
    writter.write("is");
    writter.write("cool");
    writter.write("!");
}