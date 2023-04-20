<template>
  <section class="tokenomics">
    <div class="gradient-top"></div>
    <div class="gradient-bottom"></div>
    <h2 class="section-title">MOIL tokenomics</h2>
    <div class="charts" ref="target">
      <v-chart
        class="pieChart"
        :option="pieOption"
        autoresize
        v-if="isVisible"
      />
      <v-chart :option="lineOption" autoresize v-if="isVisible" />
    </div>
  </section>
</template>
<script setup>
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent,
  ToolboxComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, watch } from 'vue';
import { useWindowSize, useElementVisibility } from '@vueuse/core';

const target = ref(null);

const isVisible = useElementVisibility(target);

const { width } = useWindowSize();

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  LineChart,
  DatasetComponent,
  GridComponent,
  ToolboxComponent,
]);

provide(THEME_KEY, 'light');

watch(width, () => {});

const pieOption = ref({
  title: {
    show: width.value > 767 ? true : false,
    text: 'Token Distribution',
    left: 'center',
    textStyle: {
      color: '#21E7D6',
      font: 'Fact',
      fontSize: width.value > 555 ? 28 : 20,
    },
  },
  legend: {
    show: width.value > 767 ? false : true,
    orient: 'horizontal',
    left: 'center',
    position: 'center',
    bottom: 0,
    // align: 'center',
    textStyle: {
      color: '#21E7D6',
      font: 'Fact',
    },
  },
  series: [
    {
      radius:
        width.value > 767
          ? ['30%', '60%']
          : width.value > 555
          ? ['70%', '40%']
          : ['60%', '35%'],
      type: 'pie',
      center: width.value > 767 ? ['50%', '55%'] : ['50%', '48%'],
      data: [
        { value: 22, name: 'Seed Round' },
        { value: 4, name: 'Private Round' },
        { value: 1, name: 'IGO/IEO' },
        { value: 12, name: 'Team' },
        { value: 2, name: 'Advisors' },
        { value: 30, name: 'Play to Earn Treasury' },
        { value: 15, name: 'Ecosystem Fund' },
        { value: 14, name: 'Marketing' },
      ],
      avoidLabelOverlap: false,
      emphasis: {
        focus: width.value > 767 ? 'self' : 'none',
        label: {
          show: true,
          fontSize: width.value > 767 ? 16 : 20,
          textBorderColor: '#000',
          textBorderWidth: 1,
        },
      },
      labelLine: {
        show: width.value > 767 ? true : false,
      },
      label: {
        formatter: '{b}: ({d}%)',
        color: '#21E7D6',
        fontFamily: 'Fact',
        fontWeight: '700',
        fontSize: width.value > 767 ? 14 : 20,
        borderWidth: 2,
        show: width.value > 767 ? true : false,
        offset: width.value > 767 ? [0, 0] : [0, -150],
        position: width.value > 767 ? 'outer' : 'center',
      },
    },
  ],
});
const lineOption = ref({
  title: {
    text: 'Months after Exchange listing',
    left: 'center',
    textStyle: {
      color: '#21E7D6',
      font: 'Fact',
      fontSize: width.value > 555 ? 28 : 20,
    },
    top: width.value > 767 ? '0%' : '5%',
  },
  label: {
    color: '#21E7D6',
    fontFamily: 'Fact',
    fontWeight: '400',
    fontSize: '12',
    borderWidth: 2,
  },
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#000',
        color: '#fff',
        font: 'Fact',
      },
    },
  },
  // legend: {
  //   data: ['Email'],
  //   icon: '',
  // },
  grid: {
    top: '23%',
    left: '3%',
    right: '4%',
    bottom: width.value > 767 ? '0%' : '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#21E7D6',
        },
      },
      axisLabel: {
        font: 'Fact',
        fontSize: '14',
        fontWeight: 700,
      },
      boundaryGap: false,
      data: [
        'Apr 2023',
        'May 2023',
        'June 2023',
        'Jule 2023',
        'Aug 2023',
        'Sept 2023',
        'Oct 2023',
        'Nov 2023',
        'Dec 2023',
        'Jan 2024',
        'Feb 2024',
        'Mar 2024',
        'Apr 2024',
        'May 2024',
        'June 2024',
        'July 2024',
        'Aug 2024',
        'Sept 2024',
        'Oct 2024',
        'Nov 2024',
        'Dec 2024',
        'Jan 2025',
        'Feb 2025',
        'Mar 2025',
        'Apr 2025',
        'May 2025',
        'June 2025',
        'July 2025',
        'Aug 2025',
        'Sept 2025',
        'Oct 2025',
        'Nov 2025',
        'Dec 2025',
        'Jan 2026',
        'Feb 2026',
        'Mar 2026',
      ],
    },
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#21E7D6',
        },
      },
      axisLabel: {
        font: 'Fact',
        fontSize: '14',
        fontWeight: 700,
      },
    },
  ],
  series: [
    {
      type: 'line',
      stack: 'Total',
      areaStyle: {
        opacity: 0.9,
      },
      // lineStyle: {
      //   color: '21E7D6',
      // },
      emphasis: {
        focus: 'series',
      },
      smooth: false,
      showSymbol: false,
      data: [
        120000, 595000, 8078929, 8078929, 8064484, 8064484, 8064484, 8064484,
        8064484, 6568796, 4046296, 4046296, 4046296, 4046296, 546296, 546296,
        546296, 546296, 546296, 546296, 546296, 546296, 546296, 440741, 440741,
        440741, 440741, 440741, 440741, 440741, 440741, 440741, 440741, 440741,
        440741, 440741,
      ],
    },
  ],
});
</script>
<style scoped>
.tokenomics {
  position: relative;
  z-index: 4;
}
.tokenomics::after {
  content: '';
  width: 100%;
  position: absolute;
  top: -100px;
  left: 0;
  height: 100px;
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
  z-index: 3;
}
.section-title {
  z-index: 3;
  position: relative;
  width: fit-content;
  text-align: center;
  margin: 0 auto;
  padding: 0 40px;
}
.gradient-top,
.gradient-bottom {
  height: 100px;
}
.charts {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 400px;
  padding: 0 40px;
}
@media (max-width: 1200px) {
  .charts {
    height: 300px;
  }
}
@media (max-width: 1025px) {
  .charts {
    flex-direction: column;
    height: 800px;
  }
}
@media (max-width: 768px) {
  .charts {
    padding: 0 20px;
    /* height: 600px; */
  }
}
@media (max-width: 556px) {
  .section-title {
    padding: 0 20px;
  }
}
</style>
