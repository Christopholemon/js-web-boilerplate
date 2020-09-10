// hooks/use-component-name.js is a single hook that calls all other hooks used by the component.

// **TODO** This might mean to wrap it in inside a happy container for all the dedicated funcs for this component, rather than being loose

/////////////////////////////

import useDocumentTitle from './doc-title';
import useFormInput from './form-input';
import useWindowResolution from './window-res';

// This isn't working because braining is hard, maybe need to pass props through and stuff... i dont know, im not smart
export default function useHelloWorld() {
  const name = useDocumentTitle,
        input = useFormInput,
        resolution = useWindowResolution;
}