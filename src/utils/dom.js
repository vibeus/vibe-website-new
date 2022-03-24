const hasClass = (obj, cls) =>  obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
const addClass = (obj, cls) => !hasClass(obj, cls) && (obj.className += ' ' + cls);
const removeClass = (obj, cls) => hasClass(obj, cls) && (obj.className = obj.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' '));

// const toggleClass = (obj, cls) => hasClass(obj, cls) ? removeClass(obj, cls) : addClass(obj, cls);
