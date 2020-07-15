const domResize = {
  _handleResize: function (e) {
    const ele = e.target || e.srcElement;
    const trigger = ele.__resizeTrigger__;
    if (trigger) {
      const handlers = trigger.__z_resizeListeners;
      if (handlers) {
        const size = handlers.length;
        for (let i = 0; i < size; i++) {
          const h = handlers[i];
          const handler = h.handler;
          const context = h.context;
          handler.apply(context, [e]);
        }
      }
    }
  },
  _removeHandler: function (ele, handler, context) {
    const handlers = ele.__z_resizeListeners;
    if (handlers) {
      const size = handlers.length;
      for (let i = 0; i < size; i++) {
        const h = handlers[i];
        if (h.handler === handler && h.context === context) {
          handlers.splice(i, 1);
          return;
        }
      }
    }
  },
  _createResizeTrigger: function (ele) {
    const obj = document.createElement('object');
    obj.setAttribute('style',
      'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden;opacity: 0; pointer-events: none; z-index: -1;');
    obj.onload = domResize._handleObjectLoad;
    obj.type = 'text/html';
    ele.appendChild(obj);
    obj.data = 'about:blank';
    return obj;
  },
  _handleObjectLoad: function () {
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
    this.contentDocument.defaultView.addEventListener('resize', domResize._handleResize);
  },
};
if (document.attachEvent) { // ie9-10
  domResize.on = function (ele, handler, context) {
    let handlers = ele.__z_resizeListeners;
    if (!handlers) {
      handlers = [];
      ele.__z_resizeListeners = handlers;
      ele.__resizeTrigger__ = ele;
      ele.attachEvent('onresize', domResize._handleResize);
    }
    handlers.push({
      handler: handler,
      context: context,
    });
  };
  domResize.off = function (ele, handler, context) {
    const handlers = ele.__z_resizeListeners;
    if (handlers) {
      domResize._removeHandler(ele, handler, context);
      if (handlers.length === 0) {
        ele.detachEvent('onresize', domResize._handleResize);
        delete ele.__z_resizeListeners;
      }
    }
  };
} else {
  domResize.on = function (ele, handler, context) {
    let handlers = ele.__z_resizeListeners;
    if (!handlers) {
      handlers = [];
      ele.__z_resizeListeners = handlers;

      if (getComputedStyle(ele, null).position === 'static') {
        ele.style.position = 'relative';
      }
      const obj = domResize._createResizeTrigger(ele);
      ele.__resizeTrigger__ = obj;
      obj.__resizeElement__ = ele;
    }
    handlers.push({
      handler: handler,
      context: context,
    });
  };
  domResize.off = function (ele, handler, context) {
    const handlers = ele.__z_resizeListeners;
    if (handlers) {
      domResize._removeHandler(ele, handler, context);
      if (handlers.length === 0) {
        const trigger = ele.__resizeTrigger__;
        if (trigger && trigger.contentDocument) {
          trigger.contentDocument.defaultView.removeEventListener('resize', domResize._handleResize);
          ele.removeChild(trigger);
          delete ele.__resizeTrigger__;
        }
        delete ele.__z_resizeListeners;
      }
    }
  };
}

export default domResize;
