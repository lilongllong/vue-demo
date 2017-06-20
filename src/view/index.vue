<style scoped>
    .container {
        width: 100%;
        height: 100%;
    }
</style>
<template>
    <div class="container">
        <div id="chart" style='width: 400px; height: 400px'></div>
        <div class="content">{{name}}</div>
        <button @click="change">change chart</button>
    </div>
</template>
<script type="text/javascript">
var echarts = require('echarts');
var mychart = null;
export default {
    data() {
        return {
            name: '芦铭',
            chartData: {
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    },
    methods: {
        change: function(e) {
            this.chartData.title.text = this.chartData.title.text + 'a';
            this.$forceUpdate();
        }
    },
    mounted: function() {
        mychart = echarts.init(document.getElementById('chart'));
        mychart.setOption(this.chartData);
    },
    updated: function() {
        mychart.setOption(this.chartData);
        console.log('update');
    }
};

</script>
