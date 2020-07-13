import Vue from 'vue';

import RectBox from './RectBox';
import SubTitle from './SubTitle';
import TimeButton from './TimeButton';
import MonthBut from './MonthBut';
import YearBut from './YearBut';
import MySelect from './MySelect';
import TitlePanel from './TitlePanel';
import MyEcharts from './MyEcharts';



Vue.component('rect-box', RectBox); // 矩形容器
Vue.component('sub-title', SubTitle); // 小标题
Vue.component('title-Panel', TitlePanel); // 标题版
Vue.component('time-button', TimeButton); // 时间按钮
Vue.component('month-but', MonthBut); // 月份选择
Vue.component('year-but', YearBut); // 年份选择
Vue.component('my-select', MySelect); // 类别选择
Vue.component('my-echarts', MyEcharts); // 类别选择