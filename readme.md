# vue-chat-scroll-top-load

Forked from [theomessin/vue-chat-scroll](https://github.com/theomessin/vue-chat-scroll)
Added new feature when scroll to the top of element , element would emits "scroll-top" event.

## Installation

- #### NPM / Yarn
  Run `npm install --save vue-chat-scroll-top-scroll`, or `yarn add vue-chat-scroll-top-load`

- #### With Modules

  ``` js
  // ES6
  import Vue from 'vue'
  import VueChatScroll from 'vue-chat-scroll-top-scroll'
  Vue.use(VueChatScroll)

  // ES5
  var Vue = require('vue')
  Vue.use(require('vue-chat-scroll-top-scroll'))
  ```

- #### `<script>` Include

  Just include `./dist/vue-chat-scroll-top-scroll.js` after Vue itself.

## Usage

There's nothing you need to do in JavaScript except for installation. To use the plugin, simply use the `v-chat-scroll` directive.

``` html
<ul class="messages" v-chat-scroll @scroll-top="loadNewData()">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

Checkout demo on jsfiddle: https://jsfiddle.net/sj82516/780eg0ek/  

#### Prevent scroll down when user has scrolled up

Alternatively, you can pass a config value to the directive:

``` html
<ul class="messages" v-chat-scroll="{always: false}">
  <li class="message" v-for="n in messages">{{ n }}</li>
</ul>
```

## License

[MIT](http://opensource.org/licenses/MIT)
