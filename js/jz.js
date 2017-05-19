
 // document.getElementById("iFrame1").stylecontentWindow
 // document.getElementById("iFrame1").style.overflow="hidden";.document.getElementById("windowss_api")
// setTimeout(function(){
//   var iwindow=window.frames["iFrame1"];
//   console.log("--------------all",iwindow);
//   var idoc = iwindow.document;
//           console.log("window",iwindow);//获取iframe的window对象
//           console.log("document",idoc);  //获取iframe的document
//           console.log("html",idoc.getElementById("windowss_api"));//获取iframe的html
//           console.log("head",idoc.head);  //获取head
//           console.log("body",idoc.body);
// console.log("--------------all",iwindow,"++++++++++++",idoc);
//
// },1000)



    var start_count = 1188;
    function init_all_count(){
        var t_num = $(".t_num");
        $(".t_num").html("");
        res_string = String(start_count).split("").reverse().join("")
        var len = String(start_count).length;
        for(var i=0;i<len;i++){
            // if(i%3 == 0 && i != 0){
            //     t_num.prepend('<img src="./img/images/numsplit.png" class="t_split_img">');
            // }
            var num = String(res_string).charAt(i);
            t_num.prepend('<img src="./img/images/num'+num+'.png" class="t_num_img">');
        }

        start_count = start_count + 111;
    }
    init_all_count();
    // setInterval('init_all_count()', 100);
    function random() {
        return +(Math.random() * (maxData - 10)).toFixed(1);
    }


var doscroll = function(pareat){
var $parent = $(pareat);
var $first = $parent.find('li:first');
var height = $first.height();
$first.animate({
    marginTop: -height + 'px'  //或者改成： marginTop: -height + 'px'
  }, 500, function() {// 动画结束后，把它插到最后，形成无缝
  $first.css('marginTop', 0).appendTo($parent);
 // $first.css('marginTop', 0).appendTo($parent);
});
};
setInterval(function(){doscroll('.js-slide-list')}, 2000);
setInterval(function(){doscroll('.js-slide-list_top')}, 4000);
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    list:''
  }
})
//经营状况数据
$('#my-popup').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//销售排名
$('#sell_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//库存概况
$('#repertory_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//工作流程监控BPM
$('#flow_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//阳光酿造
$('#sun_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//生产监控
$('#production_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
//极优佳App运营概况
$('#app_all').on('open.modal.amui', function(){
console.log('第一个演示弹窗打开了');
var b="我是数据";
app.list=b
});
var top_left=[];
//经营概况
var jz_left_top = echarts.init(document.getElementById('jz_left_top'), 'dark');
var top1_data_all=[{"sum1":20,"sum2":80},{"sum1":20,"sum2":80},{"sum1":30,"sum2":70},{"sum1":60,"sum2":40}];
//销售排名
var jz_left_top2 = echarts.init(document.getElementById('jz_left_top2'), 'dark');
// 库存概况
var jz_top6_zhe = echarts.init(document.getElementById('jz_top6_zhe'), 'dark');
//考勤统计
var jz_top4_left1 = echarts.init(document.getElementById('jz_top4_left1'), 'dark');
var jz_top4_left2 = echarts.init(document.getElementById('jz_top4_left2'), 'dark');
var jz_top4_left3 = echarts.init(document.getElementById('jz_top4_left3'), 'dark');
var top3_center_tu = echarts.init(document.getElementById('top3_center_tu'), 'dark');
// ------------------经营概况-------------------------

var dataStyle = {
    normal: {
      label: {show:false},
        labelLine: {show:true},
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
     color: ['#0766E8', '#2EAA78','#FE7F1E','#ECAC13'],
    tooltip : {
        show: true,
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        itemGap:12,
        y: 'bottom',
        data:['采购计划','生产计划','发货计划','销售任务'],
        itemStyle : dataStyle,
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
    series : [{
        name:'采购计划',
        type:'pie',
        clockWise:false,
        radius : ['10%', '24%'],
        itemStyle : dataStyle,
        hoverAnimation: false,

        data:[
            {
                value:top1_data_all[0].sum1,
                name:'采购计划',
            },
            {
                value:top1_data_all[0].sum2,
                name:'未完成',
                itemStyle : placeHolderStyle
            }

        ]
    },
        {
            name:'生产计划',
            type:'pie',
            clockWise:false,
            radius : ['28%', '42%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:top1_data_all[1].sum1,
                    name:'生产计划',
                },
                {
                    value:top1_data_all[1].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }

            ]
        },
         {
            name:'发货计划',
            type:'pie',
            clockWise:false,
            radius : ['46%', '60%'],
            itemStyle : dataStyle,
            hoverAnimation: false,

            data:[
                {
                    value:top1_data_all[2].sum1,
                    name:'发货计划'
                },
                {
                    value:top1_data_all[2].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }
            ]
        },
        {
            name:'销售任务',
            type:'pie',
            clockWise:false,
            hoverAnimation: false,
            radius : ['64%', '78%'],
            itemStyle : dataStyle,

            data:[
                {
                    value:top1_data_all[3].sum1,
                    name:'销售任务'
                },
                {
                    value:top1_data_all[3].sum2,
                    name:'未完成',
                    itemStyle : placeHolderStyle
                }
            ]
        },


    ]
};
//销售排名------------------------------------------------------
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
// -----------------------折线图--------------------------
option_jz_top6_zhe = {
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
        data: ['订单量', '提货量'],
        textStyle: {
            color: '#fff',
        }
    },
    toolbox: {
        show: true,
        orient: 'vertical',
        right: 'right',
        top: '20%',
        itemGap: 20,
        feature: {
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
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
        max: 4000,
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
                name: '订单量',
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
                data: [2000, 122, 3121, 54, 60, 2630, 1150, 2442, 1292]
            }, {
                name: '提货量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 1
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(240, 231, 80, 0.9)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(240, 231, 80, 0.4)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.9)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(240,231,80)'

                    }
                },
                data: [1130, 812, 1134, 2361, 413, 1330, 1301, 594, 1230]
            },

        ] //series结束
}; // option结束
//------------------------------------------------
// -------------------------考勤统计小圆圈11-------------------------------------
option_jz_top4_left1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '全率',
        type: 'pie',
        radius: ['60%', '70%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 40,
            name: '全率',
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
                        color: 'rgba(207, 2,255, 0.9)'
                    }]),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    color: '#fff',
                    shadowBlur: 10
                },
            }
        }, {
            value: 60,
            name: '占位',
            itemStyle: {
                        normal: {
                            color: '#fff'
                        }
                    },
            label: {
                normal: {
                    formatter: '\n全勤率',
                    textStyle: {
                        color: '#fff',
                        fontSize: 18
                    }
                }
            },
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#fff'
                },
                emphasis: {
                    color: '#fff'
                }
            },
            hoverAnimation: false
        }]
    }]
};
// -----------------------考勤统计小圆圈结束--------------------------

// -----------------------考勤统计小圆圈22222--------------------------

option_jz_top4_left2 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
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
                        color: 'rgba(17, 99,198, 0.9)'
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
                    formatter: '\n完率',
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
// -----------------------考勤统计小圆圈结束--------------------------

// -----------------------考勤统计小圆圈333333--------------------------

option_jz_top4_left3 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
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
// -----------------------考勤统计小圆圈结束--------------------------
option_top3_center_tu = {
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
                name: '实时活跃数曲线',
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
// -------------------------考勤统计小圆圈11-------------------------------------
option_jz_top4_left1 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['']
    },
    series: [{
        name: '全勤率',
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
                        color: 'rgba(0, 211,252, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 193,246, 0.4)'
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
                    formatter: '\n全勤率',
                    textStyle: {
                        color: '#555',
                        fontSize: 14
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
//经营概况
jz_left_top.setOption(option_jz_left_top1);
//销售排名
jz_left_top2.setOption(option_jz_left_top2);
//库存概况
jz_top6_zhe.setOption(option_jz_top6_zhe);
//考勤统计
jz_top4_left1.setOption(option_jz_top4_left1);
jz_top4_left2.setOption(option_jz_top4_left2);
jz_top4_left3.setOption(option_jz_top4_left3);
top3_center_tu.setOption(option_top3_center_tu);
