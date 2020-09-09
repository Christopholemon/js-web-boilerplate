import React, { Fragment } from "react";
import './hello-world.scss'

/*
// Old school react

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
*/

// New school react
import { useDocumentTitle, useFormInput, useWindowResolution } from './hooks/index';

console.log(">> HELLO-WORLD.JS", useDocumentTitle, useFormInput, useWindowResolution)

function HelloWorld(props) {
  const name = useFormInput("Hello");
  const location = useFormInput("World");
  const resolution = useWindowResolution();
  useDocumentTitle(name.value + " from " + location.value);

  return (
    <Fragment>
      <h1 className="title">
        HELLO WORLD!?@#
      </h1>
      <p>Here is a form using hooks</p>
      <section className="form">
        <form autoComplete="off">
          <section>
            <label htmlFor="name">Name</label>
            <input {...name} />
          </section>
          <section>
            <label htmlFor="location">Location</label>
            <input {...location} />
          </section>
        </form>
        <p>
          Hello {name.value} from {location.value}
        </p>
        <h3>
          {resolution.width} x {resolution.height}
        </h3>
      </section>
    </Fragment>
  );
}

export default HelloWorld;