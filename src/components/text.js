export default function text({id, className, content, style, bindings}) {
  var el = document.createElement('span');
  el.textContent = content;
  id && el.setAttribute('id', id);
  className && el.setAttribute('class', className);
  style && el.setAttribute('style', style);
  bindings && el.setAttribute('data-bind', bindings);
  return el;
}
