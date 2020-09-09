// hooks/index.js is an entry file that merely re-exports its siblings.

import useDocumentTitle from './doc-title';
import useFormInput from './form-input';
import useWindowResolution from './window-res';

export {
  useDocumentTitle,
  useFormInput,
  useWindowResolution
}

// export { default } from './use-hello-world';