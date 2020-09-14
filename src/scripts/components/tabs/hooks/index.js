// hooks/index.js is an entry file that merely re-exports its siblings.

// **TODO** ugly export for now
import useTabController from './tab-controller';

export {
  useTabController
}

// **TODO** Happy export when the other it works nicely
// export { useHelloWorld from default } from './use-hello-world';