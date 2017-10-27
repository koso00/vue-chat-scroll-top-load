(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['vue-chat-scroll'] = factory());
}(this, (function () { 'use strict';

/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

var scrollToBottom = function scrollToBottom(el) {
    el.scrollTop = el.scrollHeight;
};

var emit = function emit(vnode, name, data) {
    var handlers = vnode.data && vnode.data.on || vnode.componentOptions && vnode.componentOptions.listeners;

    if (handlers && handlers[name]) {
        handlers[name].fns(data);
    }
};

var vChatScroll = {
    bind: function bind(el, binding, vnode) {
        var timeout = void 0;
        var scrolled = false;
        var scrolledTop = false;

        el.addEventListener('scroll', function (e) {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
                console.log(el.scrollTop);
                if (el.scrollTop < 10) {
                    emit(vnode, 'scroll-top', "123");
                    scrolledTop = true;
                }
            }, 200);
        });

        new MutationObserver(function (e) {
            var config = binding.value || {};
            var pause = config.always === false && scrolled;
            if (scrolledTop) return el.scrollTop = 10;
            if (pause || e[e.length - 1].addedNodes.length != 1) return;
            console.log(pause, scrolled);
            scrollToBottom(el);
        }).observe(el, { childList: true, subtree: true });
    },
    inserted: scrollToBottom
};

/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file vue-chat-scroll plugin definition
 */

var VueChatScroll = {
    install: function install(Vue, options) {
        Vue.directive('chat-scroll', vChatScroll);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueChatScroll);
}

return VueChatScroll;

})));
