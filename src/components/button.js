export default function button({id, className, content, style, bindings, handler}) {
  var el = document.createElement("button");
  el.textContent = content;
  id && el.setAttribute('id', id);
  className && el.setAttribute('class', className);
  style && el.setAttribute('style', style);
  bindings && el.setAttribute('data-bind', bindings);
  handler && el.addEventListener('click', handler);
  return el;
}
