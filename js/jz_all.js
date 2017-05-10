var doscroll = function(){
var $parent = $('.js-slide-list');
var $first = $parent.find('li:first');
var height = $first.height();
$first.animate({
    marginTop: -height + 'px'  //或者改成： marginTop: -height + 'px'
  }, 500, function() {// 动画结束后，把它插到最后，形成无缝
  $first.css('marginTop', 0).appendTo($parent);
 // $first.css('marginTop', 0).appendTo($parent);
});
};
var top_left=[];

setInterval(function(){doscroll()}, 2000);
var jz_left_top = echarts.init(document.getElementById('jz_left_top'), 'dark');
var jz_left_top2 = echarts.init(document.getElementById('jz_left_top2'), 'dark');
var jz_left_top4 = echarts.init(document.getElementById('jz_left_top4'), 'dark');
var jz_left_top9 = echarts.init(document.getElementById('jz_left_top9'), 'dark');
var jz_left_top5 = echarts.init(document.getElementById('jz_left_top5'), 'dark');
// var jz_left_top6 = echarts.init(document.getElementById('jz_left_top6'), 'dark');
// var jz_content_top = echarts.init(document.getElementById('jz_content_top'), 'dark');
// var jz_right_top = echarts.init(document.getElementById('jz_right_top'), 'dark');
// var jz_right_center = echarts.init(document.getElementById('jz_right_center'), 'dark');
// var jz_right_center2 = echarts.init(document.getElementById('jz_right_center2'), 'dark');
// var jz_right_center3 = echarts.init(document.getElementById('jz_right_center3'), 'dark');
var dataStyle = {
    normal: {
        label: {show:false},
        labelLine: {show:false},
        shadowBlur: 0,
        shadowColor: 'rgba(40, 40, 40, 0.5)',
    }
};
var placeHolderStyle = {
    normal : {
        color: 'rgba(255,255,255,0.2)',
        label: {show:false},
        labelLine: {show:false}
    },
    emphasis : {
        color: 'rgba(0,0,0,0)'
    }
};
option_jz_left_top1 = {
   backgroundColor: 'rgba(1,1,1,0)',
     color: ['#0766E8', '#2EAA78','#FE7F1E'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        data:['01','02','03']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false},
            restore : {show: false},
            saveAsImage : {show: false}
        }
    },
    series : [
        {
            name:'Line 1',
            type:'pie',
            clockWise:false,
            radius : [50,38],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:300,
                    name:'01',
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }

            ]
        },
         {
            name:'Line 2',
            type:'pie',
            clockWise:false,
            radius : [65,54],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:150,
                    name:'02'
                },
                {
                    value:60,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'Line 3',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : [80, 70],
            itemStyle : dataStyle,

            data:[
                {
                    value:80,
                    name:'03'
                },
                {
                    value:50,
                    name:'invisible',
                    itemStyle : placeHolderStyle
                }
            ]
        },


    ]
};
option_jz_left_top6 = {
    title: {
        text: ''
    },
      textStyle: {
        color: "#ffffff"
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['包租费', '装修费', '保洁费', '物业费'],
        align: 'right',
        right: 10
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['新虹桥', '中山公园', '虹桥', '镇宁路', '天山古北']
    }],
    yAxis: [{
        type: 'value',
        name: '总价(万元)',
        axisLabel: {
            formatter: '{value}'
        }
    }],
    series: [{
        name: '包租费',
        type: 'bar',
        data: [20, 12, 31, 34, 31],
       itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(207, 8,255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 99,198, 0.4)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                },

            }
    }, {
        name: '装修费',
        type: 'bar',
        data: [10, 20, 5, 9, 3],
         itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 215,252, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 215,252, 0.4)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowBlur: 10
                },

            }
    }, ]

};
// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 8; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option_jz_left_top2 = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};

option_jz_left_top9 = {
    color: ['#00ffff', '#00ffa2', '#f0e750'],
    tooltip: {
        trigger: 'axis',
        textStyle: {
            fontSize: 15,
            color: "#fff",
        }
    },
    legend: {
        orient: 'horizontal',
        right: "4%",
        itemGap: 20,
        //itemWidth:16,
        //itemHeight:12,
        data: ['高危'],
        textStyle: {
            color: '#fff',
        }
    },
    toolbox: {
        show: false,
        orient: 'vertical',
        right: 'right',
        top: '20%',
        itemGap: 20,
        feature: {
            magicType: {
                show: false,
                type: ['line', 'bar']
            },
            restore: {
                show: false
            },
            saveAsImage: {
                show: false
            }
        },
        iconStyle: {
            normal: {
                color: '#0390e9'
            }
        }
    },
    grid: {
        show: true,
        left: 60,
        top: 34,
        right: 44,
        bottom: 42,
        borderWidth: 1,
        borderColor: 'rgba(170,172,178,0.33)',
        backgroundColor: 'rgba(17, 34, 69, 0.24)',
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        //在（type: 'category'）中设置data有效
        data: ['00:00:00', '03:00:00', '06:00:00', '09:00:00', '12:00:00',
            '15:00:00', '18:00:00', '21:00:00', '00:00:00'
        ],

        splitLine: { //坐标轴在 grid 区域中的分隔线；
            show: true,
            lineStyle: { //分割线颜色，可设单个，也可以设置数组。
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的x轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 15,
            },
        },
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        max: 30,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.33)'
            }
        },
        axisLine: { //坐标轴轴线相关设置。就是数学上的y轴
            show: true,
            lineStyle: {
                color: 'rgba(170,172,178,0.53)'
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.83)',
                fontSize: 12,
            },
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['#112245', 'rgba(34,50,82,0.4)']
            }
        }
    }],
    series: [{
                name: '高危',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                lineStyle: { //线条样式
                    normal: {
                        width: 1
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 255, 255, 0.9)'
                        }, {
                            offset: 0.7,
                            color: 'rgba(0, 255, 255, 0.6)'
                        }], false),

                        shadowColor: 'rgba(0, 0, 0, 0.9)', //阴影颜色
                        shadowBlur: 10 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                itemStyle: { //折现拐点标志的样式
                    normal: {
                        color: 'rgb(0,255,255)'
                    }
                },
                data: [2, 12, 3, 5, 6, 2, 11, 24, 12]
            }

        ] //series结束
}; // option结束
option_jz_left_top4 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['占有率']
    },
    series: [{
        name: '饼图二',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '占有率',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 20,
                        color:'red'
                    }
                }
            },
             itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(207, 8,255, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17, 99,198, 0.4)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            label: {
                normal: {
                    formatter: '\n完成率',
                    textStyle: {
                        color: '#555',
                        fontSize: 16
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
            hoverAnimation: false
        }]
    }]
};
// 使用刚指定的配置项和数据显示图表。
jz_left_top.setOption(option_jz_left_top1);
jz_left_top2.setOption(option_jz_left_top2);
jz_left_top4.setOption(option_jz_left_top4);
jz_left_top9.setOption(option_jz_left_top9);
jz_left_top5.setOption(option_jz_left_top6);
// jz_left_top6.setOption(option_jz_left_top6);
// jz_content_top.setOption(option_jz_content_top);
// jz_right_top.setOption(option_jz_right_top);
// jz_right_center.setOption(option_jz_right_center);
// jz_right_center2.setOption(option_jz_right_center2);
// jz_right_center3.setOption(option_jz_right_center3);
