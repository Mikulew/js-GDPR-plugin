# GDPR plugin

# Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Usage](#usage)
* [Options](#options)
* [Methods](#Methods)

## General info

GDPR plugin is a project in which an example of a pop-up modal to accept or cancel a GDPR consent.

## Technologies

* HTML5
* SASS/CSS
* JavaScript (ES6)
* Webpack
* npm

## Setup

> To run this project, install it locally using npm

### Development server (compiles and hot-reloads)

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run start
```

### Build setup (development)

```bash
# install dependencies
npm install

# build for development and provide an unminified bundle in the "dist" directory
npm run build

# serve project in the "dist" directory
npm run server
```

### Production server setup

```bash
# install dependencies
npm install

# build for production with minification in the "dist" directory
npm run prod

# serve project in the "dist" directory
npm run server
```

### Demount setup

```bash
# remove the "dist" directory
npm run clean
```

## Usage

```javascript
import GDPRBox from "./lib/gdpr-plugin";

/* if autoOpen is true (default value) */
new GDPRBox({
  /* options */
}).init();

/* if autoOpen is false */
const gdprBox = new GDPRBox({
  /* options */
});

element.addEventListener("click", function() {
  gdprBox.openModal();
});
```

## Options

### `autoOpen`

Open modal automatically. Default value: `true`.

### `className`

Set class to GDPR modal. Default value: `"gdpr-modal"`.

### `titleText`

Set title to modal. Default value: `"GDPR consent"`.

### `contentText`

Set text to modal. Default value:
`"This web site complies with the UK Privacy and Electronic Communications Regulations and the UK DPA 2018 in its understanding of consent as it applies to the regulations. We only deploy by default essential cookies, we list and give you the user the option to opt into cookie deployment for other categories of cookies if you expand the 'Cookie settings' link. By clicking the 'Accept cookie settings' button you agree to the default privacy settings of only essential cookies, if you select do not deploy any cookies then none will be deployed. Your settings and options can only be remembered with the minimum essential cookies deployed."`

### `submitText`

Set text to submit button. Default value: `"submit"`.

### `cancelText`

Set text to cancel button. Default value: `"cancel"`.

### `width`

Set width to modal. Default value: `600`.

### `height`

Set height to modal. Default value: `300`.

### `overlay`

Set overlay if modal appears. Default value: `true`.

### `expirationTime`

Set time in seconds when modal will be appear after close modal. Default value: `604800` (7 days in seconds)

## Methods

### `init()`

Use this method if autoOpen is true. Modal will appear when browser loads.

### `openModal()`

Use this method if autoOpen is false. Modal will appear when this method calls.
