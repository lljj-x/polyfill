
// es6
import './es6';

// es7
import 'core-js/fn/array/includes';
import 'core-js/fn/object/values';
import 'core-js/fn/object/entries';
import 'core-js/fn/promise/finally';
import 'core-js/fn/promise/try';
import 'core-js/fn/string/trim-left';
import 'core-js/fn/string/trim-right';
import 'core-js/fn/global';

// import 'core-js/fn/string/pad-start';
// import 'core-js/fn/string/pad-end';
// import 'core-js/fn/symbol/async-iterator';
// import 'core-js/fn/object/get-own-property-descriptors';

// web
// import 'core-js/web';

// regenerator-runtime
import 'regenerator-runtime/runtime';

if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
    console.warn("@gb/polyfill is loaded more than once on this page. ");
}

global._babelPolyfill = true;
