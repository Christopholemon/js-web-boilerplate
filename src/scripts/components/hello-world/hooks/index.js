// hooks/index.js is an entry file that merely re-exports its siblings.

// **TODO** ugly export for now
import useCount from './btn-count';
import useDocumentTitle from './doc-title';
import useFormInput from './form-input';
import useWindowResolution from './window-res';

export {
  useCount,
  useDocumentTitle,
  useFormInput,
  useWindowResolution
}

// **TODO** Happy export when the other it works nicely
// export { useHelloWorld from default } from './use-hello-world';