import React, { Fragment } from 'react';
import './hello-world.scss'

function HelloWorld() {
  return (
      <Fragment>
        <h1 className="title">
          HELLO WORLD!!!!!???!??!?!?!@@!!!!!
        </h1>
        <p>Here is some other content and shit</p>
      </Fragment>
  );
}

export default HelloWorld;

// function MyComponent() {
//   const state = useHook();
//   return <div {...state} />;
// }
// export default withHoc(MyComponent);

/*
If you are using React hooks,
You likely only have one root component in your src/components/component-name directory. You can use hooks to manage that component’s local state, global state, and values pulled from React contexts. You typically do not need higher-order components, and if you do, they wrap neatly around the default export:
*/