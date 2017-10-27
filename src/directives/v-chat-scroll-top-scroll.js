/**
 * @name VueJS vChatScroll (vue-chat-scroll)
 * @description Monitors an element and scrolls to the bottom if a new child is added
 * @author Theodore Messinezis <theo@theomessin.com>
 * @file v-chat-scroll  directive definition
 */

const scrollToBottom = el => {
    el.scrollTop = el.scrollHeight;
};

const emit = (vnode, name, data) => {
  var handlers = (vnode.data && vnode.data.on) ||
    (vnode.componentOptions && vnode.componentOptions.listeners);

  if (handlers && handlers[name]) {
    handlers[name].fns(data);
  }
}

const vChatScroll = {
    bind: (el, binding, vnode) => {
        let timeout;
        let scrolled = false;
        let scrolledTop = false;

        el.addEventListener('scroll', e => {
            if (timeout) window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                scrolled = el.scrollTop + el.clientHeight + 1 < el.scrollHeight;
                console.log(el.scrollTop)
                if(el.scrollTop < 10){
                    emit(vnode, 'scroll-top', "123")
                    scrolledTop = true
                }
            }, 200);
        });

        (new MutationObserver(e => {
            let config = binding.value || {};
            let pause = config.always === false && scrolled;
            if(scrolledTop) return el.scrollTop = 10;
            if (pause || e[e.length - 1].addedNodes.length != 1) return;
            console.log(pause, scrolled)
            scrollToBottom(el);
        })).observe(el, {childList: true, subtree: true});
    },
    inserted: scrollToBottom
};



export default vChatScroll;
