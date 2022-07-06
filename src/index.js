//import $ from 'jquery';
import KO from 'knockout'
//import 'bootstrap';
import './styles.css';
import title from './components/title.js';
import block from './components/block.js';
import text from './components/text.js';
import button from './components/button.js';

function main() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(title({
    id:"mainTitle", content:"Test App",
    style:"color:white"
  }));
  fragment.appendChild(block({
    id:"mainLabel",
    content:text({bindings:"text: label"}),
    style:"color:red; font-size:2rem"
  }));
  fragment.appendChild(block({
    id:"mainAction",
    className:"buttonWrapper",
    content:button({
      content:"click me!",
      style:"background-color:blue; font-size:1.5rem; color: white; border:0",
      handler:function(){
        alert("Yeeeeh!!!!");
      }
    })
  }));
  const element = block({
    content:fragment
  });

  KO.applyBindings({
    label:"Hello World!!!!"
  }, element);

  return element;
}
document.body.appendChild(main());
