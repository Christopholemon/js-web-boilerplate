// hooks/use-component-name.js is a single hook that calls all other hooks used by the component.

import useDocumentTitle from './doc-title';
import useFormInput from './form-input';
import useWindowResolution from './window-res';

const exports = {
  useDocumentTitle,
  useFormInput,
  useWindowResolution
};

console.log(">> USE-HELLO-WORLD.JS", exports);

export default exports;