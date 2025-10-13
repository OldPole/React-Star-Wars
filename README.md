# 🪐 Star Wars Application

[![React](https://img.shields.io/badge/React-19.1.1-blue?logo=react)](https://react.dev/)
[![Redux](https://img.shields.io/badge/Redux-5.0.1-purple?logo=redux)](https://redux.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.3-orange?logo=reactrouter)](https://reactrouter.com/)
[![Storybook](https://img.shields.io/badge/Storybook-9.1.10-ff69b4?logo=storybook)](https://storybook.js.org/)

A React web application using the Star Wars API (SWAPI) to view information about the Star Wars universe.

---

## 🐧 Links

- `Project` https://oldpole.github.io/React-Star-Wars/
- `Repository` https://github.com/OldPole/React-Star-Wars
- `StoryBook` https://oldpole.github.io/React-Star-Wars/storybook/
- `Developer` https://github.com/OldPole

---

## 🛠 Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router](https://reactrouter.com/)
- [Storybook](https://storybook.js.org/)
- [Lodash](https://lodash.com/)
- [Classnames](https://www.npmjs.com/package/classnames)
- [Prop Types](https://www.npmjs.com/package/prop-types)
- [GitHub Pages](https://pages.github.com/)

---

## 🐶 Available Scripts and Commands

```bash
# Install
npm i                    # install dependencies
```

```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages
```

```bash
# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages
```

```bash
# Not used
npm run eject            # remove the single build dependency
npm run deploy-storybook # storybook deploy
```

---

## 🦄 API

- https://swapi-api.hbtn.io/ (main API)
- https://akabab.github.io/starwars-api (images for API)

---

## 🐼 Covered Topics

<details>
<summary>React.js</summary>

- Application setup with `create-react-app`
- Component state (hook `useState`)
- Component lifecycle (hook `useEffect`)
- Context API (hook `useContext`)
- Refs and DOM (hook `useRef`)
- Memoization (hook `useCallback`)
- Creating custom hooks
- Fragments
- `Higher-Order Component` pattern
- `State Lifting` pattern
- Event handling
- Controlled Components
- CSS integration, `css-modules`, `classnames` library
- Lists and keys, `Reconciliation Algorithm`
- Lazy loading components with `React.lazy()`
- `prop-types` library for props validation
</details>

<details>
<summary>React Router</summary>

- Basic routing
- URL Parameters
- Query Parameters
- 404 (Not Found) page handling
- `useLocation` and `useHistory` hooks
</details>

<details>
<summary>Redux</summary>

- Basic react-redux application structure
- `useDispatch`, `useSelector` hooks
- Redux Middleware
- Creating async actions with `redux-thunk` library
- Tracking store state with `redux-devtools-extension`
</details>

<details>
<summary>General</summary>

- Setting up Aliases in React application (`react-app-rewire-alias` library)
- Deploying application to GitHub Pages (`gh-pages` library)
- Creating Ui-Kit from visual components and publishing to `@storybook`
- `lodash` library with utility functions
- `Visual Studio Code`. Snippets and plugins
</details>

<details>
<summary>JavaScript</summary>

- Array methods: `map`, `filter`, `forEach`
- Asynchronous programming: `Promise`, `Async Functions`
- ES6 modules (import and export)
- Spread operator for objects (component props)
- Array and object destructuring
- Ternary operators
- Working with Local Storage
- Working with API using `Fetch`
</details>

<details>
<summary>Styling</summary>

- CSS Custom Properties, modifying via JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Scrollbar styling
</details>
