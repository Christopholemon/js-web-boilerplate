// hooks/index.js is an entry file that merely re-exports its siblings.

import exports from './use-hello-world';

console.log(">> INDEX.JS", exports);

export { default } from './use-hello-world';