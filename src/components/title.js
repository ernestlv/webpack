export default function title({id, className, content, style, bindings}) {
  var el = document.createElement("h1");
  if (Object.prototype.toString.call(content) === "[object String]") {
    el.textContent = content;
  } else {
    el.appendChild(content);
  }
  id && el.setAttribute('id', id);
  className && el.setAttribute('class', className);
  style && el.setAttribute('style', style);
  bindings && el.setAttribute('data-bind', bindings);
  return el;
}
