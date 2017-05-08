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
setInterval(function(){doscroll()}, 2000);
var jz_left_top = echarts.init(document.getElementById('jz_left_top'), 'dark');
var jz_left_top2 = echarts.init(document.getElementById('jz_left_top2'), 'dark');
var jz_left_top3 = echarts.init(document.getElementById('jz_left_top3'), 'dark');
var jz_left_top4 = echarts.init(document.getElementById('jz_left_top4'), 'dark');
var jz_left_top5 = echarts.init(document.getElementById('jz_left_top5'), 'dark');
var jz_left_top6 = echarts.init(document.getElementById('jz_left_top6'), 'dark');
var jz_content_top = echarts.init(document.getElementById('jz_content_top'), 'dark');
var jz_right_top = echarts.init(document.getElementById('jz_right_top'), 'dark');
var jz_right_center = echarts.init(document.getElementById('jz_right_center'), 'dark');
var jz_right_center2 = echarts.init(document.getElementById('jz_right_center2'), 'dark');
var jz_right_center3 = echarts.init(document.getElementById('jz_right_center3'), 'dark');


var option_jz_left_top_data=[{
  value1:20,
  value2:80
},{
  value1:30,
  value2:70
},{
  value1:60,
  value2:40
},{
  value1:60,
  value2:40
}]
// 指定图表的配置项和数据
var option_jz_left_top1 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['矿工率']
  },
  series: [
    {
      name: '饼图二',
      type: 'pie',
      radius: [
        '60%', '70%'
      ],
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [
        {
          value: option_jz_left_top_data[0].value1,
          name: '矿工率',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 30
              }
            }
          }
        }, {
          value: option_jz_left_top_data[0].value2,
          name: '占位',
          label: {
            normal: {
              formatter: '\n完成率',
              textStyle: {
                color: '#fff',
                fontSize: 10
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
        }
      ]
    }
  ]
};
var option_jz_left_top2 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['出差数']
  },
  series: [
    {
      name: '饼图二',
      type: 'pie',
      radius: [
        '60%', '70%'
      ],
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [
        {
          value: option_jz_left_top_data[1].value1,
          name: '出差数',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 30
              }
            }
          }
        }, {
          value: option_jz_left_top_data[1].value2,
          name: '占位',
          label: {
            normal: {
              formatter: '\n完成率',
              textStyle: {
                color: '#fff',
                fontSize: 10
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
        }
      ]
    }
  ]
};
var option_jz_left_top3 = {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['全勤率']
  },
  series: [
    {
      name: '饼图二',
      type: 'pie',
      radius: [
        '60%', '70%'
      ],
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [
        {
          value: option_jz_left_top_data[2].value1,
          name: '全勤率',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 30
              }
            }
          }
        }, {
          value: option_jz_left_top_data[2].value2,
          name: '占位',
          label: {
            normal: {
              formatter: '\n完成率',
              textStyle: {
                color: '#fff',
                fontSize: 10
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
        }
      ]
    }
  ]
};

var option_jz_left_top4= {
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['早退率']
  },
  series: [
    {
      name: '饼图二',
      type: 'pie',
      radius: [
        '60%', '70%'
      ],
      label: {
        normal: {
          position: 'center'
        }
      },
      data: [
        {
          value: option_jz_left_top_data[3].value1,
          name: '早退率',
          label: {
            normal: {
              formatter: '{d} %',
              textStyle: {
                fontSize: 30
              }
            }
          }
        }, {
          value: option_jz_left_top_data[3].value2,
          name: '占位',
          label: {
            normal: {
              formatter: '\n完成率',
              textStyle: {
                color: '#fff',
                fontSize: 10
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
        }
      ]
    }
  ]
};
placeHolderStyle = {
    normal: {
        label: {
            show: false,
            position: "center"
        },
        labelLine: {
            show: false
        },
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    },
    emphasis: {
        color: "#dedede",
        borderColor: "#dedede",
        borderWidth: 0
    }
};
option = {
    backgroundColor: '#fff',
    color: ['#fc7a26', '#fff', '#ffa127', '#fff', "#ffcd26"],
    legend: [{
        orient: '',
        icon: 'circle',
        left: 'right',
        top: 'center',
        data: ['不喜欢', '喜欢', '跳过']
    }],
    series: [{
        name: '值',
        type: 'pie',
        clockWise: true, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        radius: [199, 200],
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside'
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#fc7a26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 7,
            name: '70%'
        }, {
            value: 3,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        radius: [180, 180],
        hoverAnimation: false,
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [159, 160],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ffa127",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 6,
            name: '60%'
        }, {
            value: 4,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: false,
        hoverAnimation: false,
        radius: [140, 140],
        data: [{
            value: 1
        }]
    }, {
        name: '值',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [119, 120],
        itemStyle: {
            normal: {
                label: {
                    show: true
                },
                labelLine: {
                    show: true,
                    length: 100,
                    smooth: 0.5
                },
                borderWidth: 5,
                shadowBlur: 40,
                borderColor: "#ffcd26",
                shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
            }
        },
        data: [{
            value: 4,
            name: '40%'
        }, {
            value: 6,
            name: '',
            itemStyle: placeHolderStyle
        }]
    }, {
        type: 'pie',
        color: ['#fc7a26', '#ffa127', "#ffcd26"],
        data: [{
            value: '',
            name: '不喜欢'
        }, {
            value: '',
            name: '喜欢'
        }, {
            value: '',
            name: '跳过'
        }]
    }, {
        name: '白',
        type: 'pie',
        clockWise: true,
        hoverAnimation: false,
        radius: [100, 100],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 1,
            label: {
                normal: {
                    formatter: '投票人数',
                    textStyle: {
                        color: '#666666',
                        fontSize: 26
                    }
                }
            }
        }, {
            tooltip: {
                show: false
            },
            label: {
                normal: {
                    formatter: '\n1200',
                    textStyle: {
                        color: '#666666',
                        fontSize: 26
                    }
                }
            }
        }]
    }]
};
var series = [];

var data = [ 22, 31, 40];
var countries = ['温度', '酒精度数', '气压'];

var titles = [];

for (var i = 0; i < 3; i++) {

    var x = 7 + i / 3 * 100 + '%';

    titles.push({
        text: countries[i],
        textAlign: 'center',
        left: x,
        bottom: 10,
        padding: 0,
        textStyle: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 'normal'
        }
    })

    series.push({
        animation: true,
        waveAnimation: true,

        color: ['rgb(253, 77, 73)'],
        center: [x, '50%'],
        radius: '63%',
        type: 'liquidFill',
        shape: 'path://M229.844,151.547v-166.75c0-11.92-9.662-21.582-21.58-21.582s-21.581,9.662-21.581,21.582v166.75c-9.088,6.654-14.993,17.397-14.993,29.524c0,20.2,16.374,36.575,36.574,36.575c20.199,0,36.574-16.375,36.574-36.575C244.838,168.944,238.932,158.201,229.844,151.547z',
        outline: {
            show: false
        },
        amplitude: 1,
        waveLength: '20%',
        backgroundStyle: {
            color: 'none',
            borderColor: '#fff',
            borderWidth: 5
        },
        data: [{
            // -60 到 100 度
            value: (data[i] - (-60)) / 160 + 0.1,
            rawValue: data[i]
        }],
        itemStyle: {
            normal: {
                shadowBlur: 0
            }
        },
        label: {
            normal: {
                position: 'insideBottom',
                distance: 10,
                formatter: function(item) {
                    return ' ' + item.data.rawValue + '°';
                },
                textStyle: {
                    color: 'rgb(253, 77, 73)',
                    fontSize: 16
                }
            }
        }
    })
}
// option_jz_left_top5 = {
//
//     tooltip : {
//         formatter: "{a} <br/>{c} {b}"
//     },
//     toolbox: {
//         show : true,
//         feature : {
//             mark : {show: true},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     series : [
//         {
//             name:'速度',
//             type:'gauge',
//             min:0,
//             max:220,
//             splitNumber:11,
//             radius: '50%',
//             axisLine: {            // 坐标轴线
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
//                     width: 3,
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisLabel: {            // 坐标轴小标记
//                 textStyle: {       // 属性lineStyle控制线条样式
//                     fontWeight: 'bolder',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisTick: {            // 坐标轴小标记
//                 length :15,        // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: 'auto',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             splitLine: {           // 分隔线
//                 length :25,         // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
//                     width:3,
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             pointer: {           // 分隔线
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5
//             },
//             title : {
//                 textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                     fontWeight: 'bolder',
//                     fontSize: 20,
//                     fontStyle: 'italic',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             detail : {
//                 backgroundColor: 'rgba(30,144,255,0.8)',
//                 borderWidth: 1,
//                 borderColor: '#fff',
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5,
//                 offsetCenter: [0, '50%'],       // x, y，单位px
//                 textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                     fontWeight: 'bolder',
//                     color: '#fff'
//                 }
//             },
//             data:[{value: 40, name: 'km/h'}]
//         },
//         {
//             name:'转速',
//             type:'gauge',
//             center : ['25%', '55%'],    // 默认全局居中
//             radius : '30%',
//             min:0,
//             max:7,
//             endAngle:45,
//             splitNumber:7,
//             axisLine: {            // 坐标轴线
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
//                     width: 2,
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisLabel: {            // 坐标轴小标记
//                 textStyle: {       // 属性lineStyle控制线条样式
//                     fontWeight: 'bolder',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisTick: {            // 坐标轴小标记
//                 length :12,        // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: 'auto',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             splitLine: {           // 分隔线
//                 length :20,         // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
//                     width:3,
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             pointer: {
//                 width:5,
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5
//             },
//             title : {
//                 offsetCenter: [0, '-30%'],       // x, y，单位px
//                 textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                     fontWeight: 'bolder',
//                     fontStyle: 'italic',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             detail : {
//                 //backgroundColor: 'rgba(30,144,255,0.8)',
//                // borderWidth: 1,
//                 borderColor: '#fff',
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5,
//                 width: 80,
//                 height:30,
//                 offsetCenter: [25, '20%'],       // x, y，单位px
//                 textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                     fontWeight: 'bolder',
//                     color: '#fff'
//                 }
//             },
//             data:[{value: 1.5, name: 'x1000 r/min'}]
//         },
//         {
//             name:'油表',
//             type:'gauge',
//             center : ['75%', '50%'],    // 默认全局居中
//             radius : '30%',
//             min:0,
//             max:2,
//             startAngle:135,
//             endAngle:45,
//             splitNumber:2,
//             axisLine: {            // 坐标轴线
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
//                     width: 2,
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisTick: {            // 坐标轴小标记
//                 length :12,        // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: 'auto',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisLabel: {
//                 textStyle: {       // 属性lineStyle控制线条样式
//                     fontWeight: 'bolder',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 },
//                 formatter:function(v){
//                     switch (v + '') {
//                         case '0' : return 'E';
//                         case '1' : return 'Gas';
//                         case '2' : return 'F';
//                     }
//                 }
//             },
//             splitLine: {           // 分隔线
//                 length :15,         // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
//                     width:3,
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             pointer: {
//                 width:2,
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5
//             },
//             title : {
//                 show: false
//             },
//             detail : {
//                 show: false
//             },
//             data:[{value: 0.5, name: 'gas'}]
//         },
//         {
//             name:'水表',
//             type:'gauge',
//             center : ['75%', '50%'],    // 默认全局居中
//             radius : '30%',
//             min:0,
//             max:2,
//             startAngle:315,
//             endAngle:225,
//             splitNumber:2,
//             axisLine: {            // 坐标轴线
//                 lineStyle: {       // 属性lineStyle控制线条样式
//                     color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
//                     width: 2,
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             axisTick: {            // 坐标轴小标记
//                 show: false
//             },
//             axisLabel: {
//                 textStyle: {       // 属性lineStyle控制线条样式
//                     fontWeight: 'bolder',
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 },
//                 formatter:function(v){
//                     switch (v + '') {
//                         case '0' : return 'H';
//                         case '1' : return 'Water';
//                         case '2' : return 'C';
//                     }
//                 }
//             },
//             splitLine: {           // 分隔线
//                 length :15,         // 属性length控制线长
//                 lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
//                     width:3,
//                     color: '#fff',
//                     shadowColor : '#fff', //默认透明
//                     shadowBlur: 10
//                 }
//             },
//             pointer: {
//                 width:2,
//                 shadowColor : '#fff', //默认透明
//                 shadowBlur: 5
//             },
//             title : {
//                 show: false
//             },
//             detail : {
//                 show: false
//             },
//             data:[{value: 0.5, name: 'gas'}]
//         }
//     ]
// };

// setInterval(function (){
//     option_jz_left_top5.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//     option_jz_left_top5.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
//     option_jz_left_top5.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
//     option_jz_left_top5.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
//     jz_left_top5.setOption(option_jz_left_top5);
// },2000)

var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
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


// option_jz_left_top6
option_jz_left_top6 = {

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

var option_jz_content_top=({
  title: {
    text: '山东地图',
    subtext: '山东详情'
  },
  tooltip: {
    trigger: 'item',
    formatter: function(a) {
      return a[2];
    }
  },
  legend: {
    orient: 'vertical',
    x: 'right',
    data: ['数据名称']
  },
  dataRange: {
    min: 0,
    max: 1000,
    color: ['orange', 'yellow'],
    text: ['高', '低'], // 文本，默认为数值文本
    calculable: true
  },
  series: [{
    type: 'map',
    map: 'shandong',
    selectedMode: 'single',
    itemStyle: {
      normal: {
        label: {
          show: true
        }
      },
      emphasis: {
        label: {
          show: true
        }
      }
    },
    data: [{
      name: '烟台市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '临沂市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '潍坊市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '青岛市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '菏泽市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '济宁市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '德州市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '滨州市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '聊城市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '东营市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '济南市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '泰安市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '威海市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '日照市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '淄博市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '枣庄市',
      value: Math.round(Math.random() * 1000)
    }, {
      name: '莱芜市',
      value: Math.round(Math.random() * 1000)
    }, ]
  }]
});


var dataMap = {};

function dataFormatter(obj) {
    var pList = ['天津', '河北', '辽宁', '上海', '江苏', '浙江', '福建', '山东', '广东', '广西 ', '海 南'];
    var temp;
    for (var year = 2011; year <= 2015; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2015: [0, 4, 4, 1, 7, 10, 11, 5, 8, 1, 5],
    2014: [0, 6, 4, 1, 8, 10, 11, 6, 10, 1, 5],
    2013: [0, 6, 4, 1, 8, 11, 11, 6, 10, 1, 5],
    2012: [0, 6, 4, 1, 8, 11, 11, 6, 11, 1, 5],
    2011: [0, 6, 4, 1, 8, 11, 11, 6, 11, 1, 5],
});

dataMap.dataPI = dataFormatter({
    //max : 4000,
    2015: [1, 6, 12, 4, 5, 15, 14, 18, 31, 6, 7],
    2014: [0, 4, 11, 4, 3, 16, 15, 16, 40, 6, 4],
    2013: [1, 4, 11, 4, 3, 14, 15, 16, 40, 6, 4],
    2012: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],
    2011: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
});

dataMap.dataSI = dataFormatter({
    //max : 26600,
    2015: [0, 1, 6, 3, 9, 8, 12, 7, 1, 0, 4],
    2014: [0, 1, 7, 0, 4, 9, 8, 13, 6, 1, 5],
    2013: [0, 1, 7, 0, 4, 10, 8, 13, 6, 1, 5],
    2012: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
    2011: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],
});



dataMap.dataTI = dataFormatter({
    //max : 25000,
    2015: [0, 1, 6, 3, 9, 8, 12, 7, 1, 0, 4],
    2014: [0, 1, 7, 0, 4, 9, 8, 13, 6, 1, 5],
    2013: [0, 1, 7, 0, 4, 10, 8, 13, 6, 1, 5],
    2012: [1, 4, 11, 4, 3, 14, 15, 17, 39, 6, 3],
    2011: [0, 1, 7, 0, 4, 10, 8, 14, 6, 1, 5],

});

dataMap.dataEstate = dataFormatter({
    //max : 3600,
    2015: [1074.93, 411.46, 918.02, 224.91, 384.76, 876.12, 238.61, 492.1, 1019.68, 2747.89, 1677.13, 634.92, 911.16, 402.51, 1838.14, 987, 634.67, 518.04, 3321.31, 465.68, 208.71, 396.28, 620.62, 160.3, 222.31, 17.44, 398.03, 134.25, 29.05, 79.01, 176.22],
    2014: [1006.52, 377.59, 697.79, 192, 309.25, 733.37, 212.32, 391.89, 1002.5, 2600.95, 1618.17, 532.17, 679.03, 340.56, 1622.15, 773.23, 564.41, 464.21, 2813.95, 405.79, 188.33, 266.38, 558.56, 139.64, 223.45, 14.54, 315.95, 110.02, 25.41, 60.53, 143.44],
    2013: [1062.47, 308.73, 612.4, 173.31, 286.65, 605.27, 200.14, 301.18, 1237.56, 2025.39, 1316.84, 497.94, 656.61, 305.9, 1329.59, 622.98, 546.11, 400.11, 2470.63, 348.98, 121.76, 229.09, 548.14, 136.15, 205.14, 13.28, 239.92, 101.37, 23.05, 47.56, 115.23],
    2012: [844.59, 227.88, 513.81, 166.04, 273.3, 500.81, 182.7, 244.47, 939.34, 1626.13, 1052.03, 431.27, 506.98, 281.96, 1104.95, 512.42, 526.88, 340.07, 2057.45, 282.96, 95.6, 191.21, 453.63, 104.81, 195.48, 15.08, 193.27, 93.8, 19.96, 38.85, 89.79],
    2011: [821.5, 183.44, 467.97, 134.12, 191.01, 410.43, 153.03, 225.81, 958.06, 1365.71, 981.42, 366.57, 511.5, 225.96, 953.69, 447.44, 409.65, 301.8, 2029.77, 239.45, 67.19, 196.06, 376.84, 93.19, 193.59, 13.24, 153.98, 83.52, 16.98, 29.49, 91.28],
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2015: [2215.41, 756.5, 746.01, 519.32, 447.46, 755.57, 207.65, 370.78, 2277.4, 2600.11, 2730.29, 503.85, 862.41, 357.44, 1640.41, 868.2, 674.57, 501.09, 2916.13, 445.37, 105.24, 704.66, 868.15, 297.27, 456.23, 31.7, 432.11, 145.05, 62.56, 134.18, 288.77],
    2014: [1863.61, 572.99, 615.42, 448.3, 346.44, 639.27, 190.12, 304.59, 1950.96, 2105.92, 2326.58, 396.17, 767.58, 241.49, 1361.45, 697.68, 561.27, 463.16, 2658.76, 384.53, 78.12, 496.56, 654.7, 231.51, 375.08, 27.08, 384.75, 100.54, 54.53, 97.87, 225.2],
    2013: [1603.63, 461.2, 525.67, 361.64, 291.1, 560.2, 180.83, 227.54, 1804.28, 1596.98, 1899.33, 359.6, 612.2, 165.1, 1044.9, 499.92, 479.11, 402.57, 2283.29, 336.82, 65.73, 389.97, 524.63, 194.44, 351.74, 23.17, 336.21, 88.27, 45.63, 75.54, 198.87],
    2012: [1519.19, 368.1, 420.74, 290.91, 219.09, 455.07, 147.24, 177.43, 1414.21, 1298.48, 1653.45, 313.81, 497.65, 130.57, 880.28, 413.83, 393.05, 334.32, 1972.4, 249.01, 47.33, 303.01, 411.14, 151.55, 277.66, 22.42, 287.16, 72.49, 36.54, 64.8, 171.97],
    2011: [1302.77, 288.17, 347.65, 218.73, 148.3, 386.34, 126.03, 155.48, 1209.08, 1054.25, 1251.43, 223.85, 385.84, 101.34, 734.9, 302.31, 337.27, 260.14, 1705.08, 190.73, 34.43, 247.46, 359.11, 122.25, 168.55, 11.51, 231.03, 61.6, 27.67, 51.05, 149.22],
});


option_jz_right_top = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2011-01-01', '2012-01-01', '2013-01-01', '2014-01-01', '2015-01-01', {
                    value: '2015-01-01',
                    tooltip: {
                        formatter: function(params) {
                            return params.name + ' ';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
            ],
            label: {
                formatter: function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '数据来自国家海洋局信息中心'
        },
        tooltip: {},
        legend: {
            x: 'right',
            data: ['生产量', '进货量', '销售量'],
            selected: {
                'GDP': false,
                '金融': false,
                '房地产': false
            }
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100
        },
        xAxis: [{
            'type': 'category',
            'axisLabel': {
                'interval': 0
            },
            'data': [
                '济南', '潍坊', '临沂', '青岛', '日照', '烟台', '枣庄', '德州', '聊城', '泰安 ', '济宁'
            ],
            splitLine: {
                show: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位：个',
            // max: 53500
            max: 100
        }],
        series: [{
            name: 'GDP',
            type: 'bar'
        }, {
            name: '金融',
            type: 'bar'
        }, {
            name: '房地产',
            type: 'bar'
        }, {
            name: '生产量',
            type: 'bar'
        }, {
            name: '进货量',
            type: 'bar'
        }, {
            name: '销售量',
            type: 'bar'
        }, {
            name: '合计',
            type: 'pie',
            center: ['75%', '35%'],
            radius: '28%'
        }],
        toolbox: {
            show: true,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
    },
    options: [

        {
            title: {
                text: '经营情况'
            },
            series: [{
                data: dataMap.dataGDP['2011']
            }, {
                data: dataMap.dataFinancial['2011']
            }, {
                data: dataMap.dataEstate['2011']
            }, {
                data: dataMap.dataPI['2011']
            }, {
                data: dataMap.dataSI['2011']
            }, {
                data: dataMap.dataTI['2011']
            }, {
                data: [{
                    name: '生产量',
                    value: dataMap.dataPI['2011sum']
                }, {
                    name: '进货量',
                    value: dataMap.dataSI['2011sum']
                }, {
                    name: '销售量',
                    value: dataMap.dataTI['2011sum']
                }]
            }]
        }, {
            title: {
                text: '经营情况'
            },
            series: [{
                data: dataMap.dataGDP['2012']
            }, {
                data: dataMap.dataFinancial['2012']
            }, {
                data: dataMap.dataEstate['2012']
            }, {
                data: dataMap.dataPI['2012']
            }, {
                data: dataMap.dataSI['2012']
            }, {
                data: dataMap.dataTI['2012']
            }, {
                data: [{
                    name: '生产量',
                    value: dataMap.dataPI['2012sum']
                }, {
                    name: '进货量',
                    value: dataMap.dataSI['2012sum']
                }, {
                    name: '销售量',
                    value: dataMap.dataTI['2012sum']
                }]
            }]
        }, {
            title: {
                text: '经营情况'
            },
            series: [{
                data: dataMap.dataGDP['2013']
            }, {
                data: dataMap.dataFinancial['2013']
            }, {
                data: dataMap.dataEstate['2013']
            }, {
                data: dataMap.dataPI['2013']
            }, {
                data: dataMap.dataSI['2013']
            }, {
                data: dataMap.dataTI['2013']
            }, {
                data: [{
                    name: '生产量',
                    value: dataMap.dataPI['2013sum']
                }, {
                    name: '进货量',
                    value: dataMap.dataSI['2013sum']
                }, {
                    name: '销售量',
                    value: dataMap.dataTI['2013sum']
                }]
            }]
        }, {
            title: {
                text: '经营情况'
            },
            series: [{
                data: dataMap.dataGDP['2014']
            }, {
                data: dataMap.dataFinancial['2014']
            }, {
                data: dataMap.dataEstate['2014']
            }, {
                data: dataMap.dataPI['2014']
            }, {
                data: dataMap.dataSI['2014']
            }, {
                data: dataMap.dataTI['2014']
            }, {
                data: [{
                    name: '生产量',
                    value: dataMap.dataPI['2014sum']
                }, {
                    name: '进货量',
                    value: dataMap.dataSI['2014sum']
                }, {
                    name: '销售量',
                    value: dataMap.dataTI['2014sum']
                }]
            }]
        }, {
            title: {
                text: '经营情况'
            },
            series: [{
                data: dataMap.dataGDP['2015']
            }, {
                data: dataMap.dataFinancial['2015']
            }, {
                data: dataMap.dataEstate['2015']
            }, {
                data: dataMap.dataPI['2015']
            }, {
                data: dataMap.dataSI['2015']
            }, {
                data: dataMap.dataTI['2015']
            }, {
                data: [{
                    name: '生产量',
                    value: dataMap.dataPI['2015sum']
                }, {
                    name: '进货量',
                    value: dataMap.dataSI['2015sum']
                }, {
                    name: '销售量',
                    value: dataMap.dataTI['2015sum']
                }]
            }]
        }
    ]
};


var data = [{
    value: 3661,
    name: '<10w'
}, {
    value: 5713,
    name: '10w-50w'
}, {
    value: 9938,
    name: '50w-100w'
}, {
    value: 17623,
    name: '100w-500w'
}, {
    value: 3299,
    name: '>500w'
}];
option = {

    title: {
        text: '注册资金',
        subtext: '2016年',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};

var data = [{
    value: 3661,
    name: '<10w'
}, {
    value: 5713,
    name: '10w-50w'
}, {
    value: 9938,
    name: '50w-100w'
}, {
    value: 17623,
    name: '100w-500w'
}, {
    value: 3299,
    name: '>500w'
}];
option_jz_right_center = {

    title: {
        text: '注册资金',
        subtext: '2016年',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};
option_jz_right_center2 = {
    title: {
        text: '注册资金',
        subtext: '2016年',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16
        }
    },
    tooltip: {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'horizontal',
        bottom: '0%',
        data: ['<10w', '10w-50w', '50w-100w', '100w-500w', '>500w']
    },
    series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['25%', '58%'],
        color: ['#86D560', '#AF89D6', '#59ADF3', '#FF999A', '#FFCC67'],

        label: {
            normal: {
                position: 'inner',
                formatter: '{d}%',

                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: data
    }, {
        type: 'pie',
        radius: ['58%', '83%'],
        itemStyle: {
            normal: {
                color: '#F2F2F2'
            },
            emphasis: {
                color: '#ADADAD'
            }
        },
        label: {
            normal: {
                position: 'inner',
                formatter: '{c}家',
                textStyle: {
                    color: '#777777',
                    fontWeight: 'bold',
                    fontSize: 14
                }
            }
        },
        data: data
    }]
};


var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        '7a', '8a', '9a','10a','11a',
        '12p', '1p', '2p', '3p', '4p', '5p',
        '6p', '7p', '8p', '9p', '10p', '11p'];
var days = ['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
option_jz_right_center3 = {
    tooltip: {},
    visualMap: {
        max: 20,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'category',
        data: hours
    },
    yAxis3D: {
        type: 'category',
        data: days
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        boxWidth: 200,
        boxDepth: 80,
        light: {
            main: {
                intensity: 1.2
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
        type: 'bar3D',
        data: data.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'color',

        label: {
            show: false,
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },

        itemStyle: {
            opacity: 0.4
        },

        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
}
// 使用刚指定的配置项和数据显示图表。
jz_left_top.setOption(option_jz_left_top1);
jz_left_top2.setOption(option_jz_left_top2);
jz_left_top3.setOption(option_jz_left_top3);
jz_left_top4.setOption(option_jz_left_top4);
jz_left_top5.setOption({
    title: titles,
    series: series
});
jz_left_top6.setOption(option_jz_left_top6);
jz_content_top.setOption(option_jz_content_top);
jz_right_top.setOption(option_jz_right_top);
jz_right_center.setOption(option_jz_right_center);
jz_right_center2.setOption(option_jz_right_center2);
jz_right_center3.setOption(option_jz_right_center3);
