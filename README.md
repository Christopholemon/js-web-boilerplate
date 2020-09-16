# Zesty JS Web Boilerplate
Basic JS based web boilerplate using React, Node and Express. Aiming to tailor everything towards ES6+ and working happily with Heroku.

Based on https://medium.com/@originaleye/build-an-express-react-node-web-app-from-scratch-86462dd9f125

---

## References/Resources:

**Styles:** Using BEMSkel as basis for style structuring https://github.com/karloespiritu/bemskel. Have made some tweaks and adjustments<br>
**React file structure:** Using this as a rough guide, structured towards using React Hooks. Have kept the styles separate, too. https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145<br>
**React Hooks:** https://reactjs.org/docs/hooks-intro.html, https://www.sitepoint.com/react-hooks/, https://github.com/rehooks/awesome-react-hooks, https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib<br>
**React Context:** https://reactjs.org/docs/context.html<br>
**React Tests:** https://medium.com/@Charles_Stover/writing-testable-react-components-with-hooks-23441ee582d5<br>
**Testing:** https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870<br>
**TS:** https://www.typescriptlang.org/, https://www.sitepoint.com/react-with-typescript-best-practices/<br>
**Markdown Styling:** https://www.markdownguide.org/basic-syntax/<br>
**Misc:** https://pipedream.com/, https://www.programmableweb.com/category/all/apis, https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/

---

## Todo:

**Layout:**
- html/building, maybe with express

**Styles:**
- need to update @imports to newer syntax to avoid deprecation, see https://css-tricks.com/introducing-sass-modules/
- clean up and streamline styles, mixins, functions, etc.
- more util/helper classes, and maybe auto generating out some common ones, too.

**JS:**
- dedicated server.js folder
- service workers
- Helmet & CORS plugins; need to look into and make it all happy and secure
- Should bring TS into the mix
- set up default React app better, make some generic util hooks
- look into and figure out Context API

**Tests:**
- Really want automated testing happening, look at Jest
- Need to implement linting

**Build:**
- Webpack folder clean removes everything, but --watch only rebuilds changed files
- ESM for packages, or some better way? Require vs import
- Make sure webpack works happily and look at improving the build
- Implement Babel properly
