import Vue from 'vue';

import RectBox from './RectBox';
import SubTitle from './SubTitle';
import TimeButton from './TimeButton';
import MyLegend from './MyLegend';
import MonthBut from './MonthBut';
import YearBut from './YearBut';
import MySelect from './MySelect';
Vue.component('rect-box', RectBox); // 矩形容器
Vue.component('sub-title', SubTitle); // 小标题
Vue.component('time-button', TimeButton); // 时间按钮
Vue.component('my-legend', MyLegend); // 图例
Vue.component('month-but', MonthBut); // 月份选择
Vue.component('year-but', YearBut); // 年份选择
Vue.component('my-select', MySelect); // 类别选择