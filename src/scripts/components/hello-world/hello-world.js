import React from "react";
import './hello-world.scss'

/*
// Old school react

function HelloWorld() {
  return (
      <>
        <h1 className="title">
          HELLO WORLD!!!!!???!??!?!?!@@!!!!!
        </h1>
        <p>Here is some other content and stuff and junk</p>
      </>
  );
}

export default HelloWorld;
*/

// New school react
import { useCount, useDocumentTitle, useFormInput, useWindowResolution } from './hooks/index';

function HelloWorld() {
  const name = useFormInput("Blah Blah");
  const location = useFormInput("Hello World"); 
  const count = useCount(0, 1);
  const resolution = useWindowResolution();
  
  useDocumentTitle(name.value + " from " + location.value);

  return (
    <>
      <h1 className="title">
        HELLO WORLD@#$%
      </h1>
      <p>Here is some tests using hooks</p>
      <section className="form">
        <form autoComplete="off">
          <section>
            <label htmlFor="name">Name</label>
            {/* <input {...name} /> */}
            <input value={name.value} onChange={name.onChange}/>            
          </section>
          <section>
            <label htmlFor="location">Location</label>
            {/* <input value={...location} /> */}
            <input value={location.value} onChange={location.onChange} />            
          </section>
        </form>
      </section>
      <section>
        {/* <button onClick={ count.onClick }> */}
        <button { ...count }>
          Click me
        </button>
      </section>
      <section>
        <p>
          Hello {name.value} from {location.value}
        </p>
        <h3>
          {resolution.width} x {resolution.height}
        </h3>
        <h3>
          You clicked the magic button {count.value} times
        </h3>
      </section>
    </>
  );
}

export default HelloWorld;