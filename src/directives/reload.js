import Vue from 'vue';
import domResize from './domResize';

// 针对echart图表根据dom宽高变化自动重绘
Vue.directive('reload', {
  // 只调用一次，指令第一次绑定到元素时调用
  bind(el) {
    const resizeListener = () => {
      if (el._chart) {
        el._chart.resize();
      }
    };
    domResize.on(el, resizeListener);
    el._resizeListener = resizeListener;
  },
  update(el, binding) {
    const chart = binding.value;
    if (chart && chart.id) {
      el._chart = chart;
    }
  },
  unbind(el) {
    domResize.off(el, el._resizeListener);
    el._chart = null;
  },
});
