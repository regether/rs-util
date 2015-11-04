let hasOwn = {}.hasOwnProperty;

function classNames() {
    let classes = [],
        i,
        len = arguments.length;
    for (i = 0; i < len; i ++) {
        let arg = arguments[i];
        if (!arg) continue;

        let argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
            classes.push(argType);
        } else if (Array.isArray(arg)) {
            classes.concat(classNames.apply(null, arg));
        } else if (argType === 'object'){
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes;
}

function setClass() {
    return (classNames.apply(this, arguments)).join(' ');
}

export default setClass;
