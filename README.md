# create-webcomponent [![Build Status](https://travis-ci.com/matt-daniel-brown/create-webcomponent.svg?branch=master)](https://travis-ci.com/matt-daniel-brown/create-webcomponent)

> NPM Package To Quickly Scaffold A New Web Component / Custom Element Boilerplate.


## Install

```
$ npm install create-webcomponent
```


## Usage

```js
const createWebcomponent = require('create-webcomponent');

createWebcomponent('unicorns');
//=> 'unicorns & rainbows'
```


## API

### createWebcomponent(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global create-webcomponent
```

```
$ create-webcomponent --help

  Usage
    create-webcomponent [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ create-webcomponent
    unicorns & rainbows
    $ create-webcomponent ponies
    ponies & rainbows
```
