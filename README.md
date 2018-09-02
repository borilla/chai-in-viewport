# chai-in-viewport

[![npm version](https://badge.fury.io/js/chai-in-viewport.svg)](https://badge.fury.io/js/chai-in-viewport)

Chai plugin to check if a DOM element is currently within the visible viewport

## Introduction

`chai-in-viewport` is an extension to the chai assertion library that provides new assertions to 
assert that a DOM element is within the browser's currently visible viewport (i.e. is not scrolled
out of view)

It is intended for use in integration tests that run in a browser or browser-like environment (e.g.
[cypress.io](https://www.cypress.io/)). It assumes access to `HTMLElment`, `document` and
`window` objects

## Installation

Install using npm

```sh
npm install chai-in-viewport
```

## Usage

In setup for your tests, import the plugin and enable it within `chai`

```js
import chai from `chai`
import chaiInViewport from `chai-in-viewpott`

chai.use(chaiInViewport);
```

## Assertions

`chai-in-viewport` adds the `inViewport` assertion, that can be applied to a HTMLElement

```js
expect(element1).to.be.inViewport
expect(element2).to.not.be.inViewport
```

## Limitations

The `inViewport` assertion currently simply tests the element's
[`getBoundingClientRect`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
against the [`documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)'s
`clientWidth` and `clientHeight`. It does not test whether the element is clipped by its parents, if
it has `visibility: hidden`, `opacity: 0`, is obscured by another element or is otherwise hidden from
view on the screen

### Testing for visibility in cypress.io

If using [cypress.io](https://www.cypress.io/), I would suggest using a combination of
`visible` and `inViewport` assertions

```js
cy.get('#el').should('be.visible.and.inViewport');
```

Cypress's visiblility code does a good job of determining visibility but is [_very complicated_](https://github.com/cypress-io/cypress/blob/master/packages/driver/src/dom/visibility.coffee)
and I wouldn't like to try to replicate it elsewhere(!)
