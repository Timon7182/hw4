import Component from "../../modules/component";
import twig from "./template.twig"
import "./style.scss";
import FileReader from "../file-reader/component";

export default class MyComponent extends Component{
    get viewModel(){
        return {
            name: this.element.dataset.name
        };
    }

    onRender(){
        var s=this.element.querySelector('.btn');
        s.addEventListener('click',display);
        function display() {
            let d= document.getElementById("file-reader-1");
            let newAtt = document.querySelector('#tid').value;
            d.setAttribute("data-filename",newAtt);

            FileReader.bind(d).render()

        }


    }
}

MyComponent.twig = twig;