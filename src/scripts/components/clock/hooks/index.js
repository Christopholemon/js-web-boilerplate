// hooks/index.js is an entry file that merely re-exports its siblings.

// **TODO** ugly export for now
import useGetTime from './get-time';

export {
  useGetTime
}

// **TODO** Happy export when the other it works nicely
// export { useHelloWorld from default } from './use-hello-world';