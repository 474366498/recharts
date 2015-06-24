var macaronsTheme = {
		// Ĭ��ɫ��
		color: [
			'#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
			'#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
			'#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
			'#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
		],

		// ͼ�����
		title: {
			itemGap: 8,
			textStyle: {
				fontWeight: 'normal',
				color: '#008acd'          // ������������ɫ
			}
		},
		
		// ͼ��
		legend: {
			itemGap: 8
		},
		
		// ֵ��
		dataRange: {
			itemWidth: 15,
			//color:['#1e90ff','#afeeee']
			color: ['#2ec7c9','#b6a2de']
		},

		toolbox: {
			color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
			effectiveColor : '#ff4500',
			itemGap: 8
		},

		// ��ʾ��
		tooltip: {
			backgroundColor: 'rgba(50,50,50,0.5)',     // ��ʾ������ɫ��Ĭ��Ϊ͸����Ϊ0.7�ĺ�ɫ
			axisPointer : {            // ������ָʾ���������ᴥ����Ч
				type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
				lineStyle : {          // ֱ��ָʾ����ʽ����
					color: '#008acd'
				},
				crossStyle: {
					color: '#008acd'
				},
				shadowStyle : {                     // ��Ӱָʾ����ʽ����
					color: 'rgba(200,200,200,0.2)'
				}
			}
		},

		// �������ſ�����
		dataZoom: {
			dataBackgroundColor: '#efefff',            // ���ݱ�����ɫ
			fillerColor: 'rgba(182,162,222,0.2)',   // �����ɫ
			handleColor: '#008acd',    // �ֱ���ɫ
		},

		// ����
		grid: {
			borderColor: '#eee'
		},

		// ��Ŀ��
		categoryAxis: {
			axisLine: {            // ��������
				lineStyle: {       // ����lineStyle����������ʽ
					color: '#008acd'
				}
			},
			splitLine: {           // �ָ���
				lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
					color: ['#eee']
				}
			}
		},

		// ��ֵ��������Ĭ�ϲ���
		valueAxis: {
			axisLine: {            // ��������
				lineStyle: {       // ����lineStyle����������ʽ
					color: '#008acd'
				}
			},
			splitArea : {
				show : true,
				areaStyle : {
					color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
				}
			},
			splitLine: {           // �ָ���
				lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
					color: ['#eee']
				}
			}
		},

		polar : {
			axisLine: {            // ��������
				lineStyle: {       // ����lineStyle����������ʽ
					color: '#ddd'
				}
			},
			splitArea : {
				show : true,
				areaStyle : {
					color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
				}
			},
			splitLine : {
				lineStyle : {
					color : '#ddd'
				}
			}
		},

		timeline : {
			lineStyle : {
				color : '#008acd'
			},
			controlStyle : {
				normal : { color : '#008acd'},
				emphasis : { color : '#008acd'}
			},
			symbol : 'emptyCircle',
			symbolSize : 3
		},

		// ����ͼĬ�ϲ���
		bar: {
			itemStyle: {
				normal: {
					borderRadius: 5
				},
				emphasis: {
					borderRadius: 5
				}
			}
		},

		// ����ͼĬ�ϲ���
		line: {
			smooth : true,
			symbol: 'emptyCircle',  // �յ�ͼ������
			symbolSize: 3           // �յ�ͼ�δ�С
		},
		
		// K��ͼĬ�ϲ���
		k: {
			itemStyle: {
				normal: {
					color: '#d87a80',       // ���������ɫ
					color0: '#2ec7c9',      // ���������ɫ
					lineStyle: {
						width: 1,
						color: '#d87a80',   // ���߱߿���ɫ
						color0: '#2ec7c9'   // ���߱߿���ɫ
					}
				}
			}
		},
		
		// ɢ��ͼĬ�ϲ���
		scatter: {
			symbol: 'circle',    // ͼ������
			symbolSize: 4        // ͼ�δ�С������뾶����������ͼ��Ϊ������������ܿ��ΪsymbolSize * 2
		},

		// �״�ͼĬ�ϲ���
		radar : {
			symbol: 'emptyCircle',    // ͼ������
			symbolSize:3
			//symbol: null,         // �յ�ͼ������
			//symbolRotate : null,  // ͼ����ת����
		},

		map: {
			itemStyle: {
				normal: {
					areaStyle: {
						color: '#ddd'
					},
					label: {
						textStyle: {
							color: '#d87a80'
						}
					}
				},
				emphasis: {                 // Ҳ��ѡ����ʽ
					areaStyle: {
						color: '#fe994e'
					},
					label: {
						textStyle: {
							color: 'rgb(100,0,0)'
						}
					}
				}
			}
		},
		
		force : {
			itemStyle: {
				normal: {
					linkStyle : {
						strokeColor : '#1e90ff'
					}
				}
			}
		},

		chord : {
			padding : 4,
			itemStyle : {
				normal : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					},
					chordStyle : {
						lineStyle : {
							width : 1,
							color : 'rgba(128, 128, 128, 0.5)'
						}
					}
				},
				emphasis : {
					lineStyle : {
						width : 1,
						color : 'rgba(128, 128, 128, 0.5)'
					},
					chordStyle : {
						lineStyle : {
							width : 1,
							color : 'rgba(128, 128, 128, 0.5)'
						}
					}
				}
			}
		},

		gauge : {
			startAngle: 225,
			endAngle : -45,
			axisLine: {            // ��������
				show: true,        // Ĭ����ʾ������show������ʾ���
				lineStyle: {       // ����lineStyle����������ʽ
					color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']], 
					width: 10
				}
			},
			axisTick: {            // ������С���
				splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
				length :15,        // ����length�����߳�
				lineStyle: {       // ����lineStyle����������ʽ
					color: 'auto'
				}
			},
			axisLabel: {           // �������ı���ǩ�����axis.axisLabel
				textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
					color: 'auto'
				}
			},
			splitLine: {           // �ָ���
				length :22,         // ����length�����߳�
				lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
					color: 'auto'
				}
			},
			pointer : {
				width : 5,
				color : 'auto'
			},
			title : {
				textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
					color: '#333'
				}
			},
			detail : {
				textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
					color: 'auto'
				}
			}
		},
		
		textStyle: {
			fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
		}
	}
	  
var blueTheme = {
    // Ĭ��ɫ��
    color: [
        '#1790cf','#1bb2d8','#99d2dd','#88b0bb',
        '#1c7099','#038cc4','#75abd0','#afd6dd'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#1790cf'
        }
    },
    
    // ֵ��
    dataRange: {
        color:['#1178ad','#72bbd0']
    },

    // ������
    toolbox: {
        color : ['#1790cf','#1790cf','#1790cf','#1790cf']
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#1790cf',
                type: 'dashed'
            },
            crossStyle: {
                color: '#1790cf'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#eee',            // ���ݱ�����ɫ
        fillerColor: 'rgba(144,197,237,0.2)',   // �����ɫ
        handleColor: '#1790cf'     // �ֱ���ɫ
    },
    
    // ����
    grid: {
        borderWidth: 0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#1790cf'
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#1790cf'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#1790cf'
        },
        controlStyle : {
            normal : { color : '#1790cf'},
            emphasis : { color : '#1790cf'}
        }
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#1bb2d8',          // ���������ɫ
                color0: '#99d2dd',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#1c7099',   // ���߱߿���ɫ
                    color0: '#88b0bb'   // ���߱߿���ɫ
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#99d2dd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#1790cf'
                }
            }
        }
    },
    
    chord : {
        padding : 4,
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#1bb2d8'],[0.8, '#1790cf'],[1, '#1c7099']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var darkTheme = {
    // ȫͼĬ�ϱ���
    backgroundColor: '#1b1b1b',

    // Ĭ��ɫ��
    color: [
        '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
        '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
        '#B5C334'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'          // ������������ɫ
        }
    },

    // ͼ��
    legend: {
        textStyle: {
            color: '#ccc'          // ͼ��������ɫ
        }
    },

    // ֵ��
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808','#21BCF9'],
        textStyle: {
            color: '#ccc'          // ֵ��������ɫ
        }
    },

    toolbox: {
        color : ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor : '#FE8463',
        disableColor: '#666'
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(250,250,250,0.8)',     // ��ʾ������ɫ��Ĭ��Ϊ͸����Ϊ0.7�ĺ�ɫ
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#aaa'
            },
            crossStyle: {
                color: '#aaa'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.2)'
            }
        },
        textStyle: {
            color: '#333'
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#555',            // ���ݱ�����ɫ
        fillerColor: 'rgba(200,200,200,0.2)',   // �����ɫ
        handleColor: '#eee'     // �ֱ���ɫ
    },

    // ����
    grid: {
        borderWidth: 0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            show: false
        },
        axisTick: {            // ������С���
            show: false
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // �ָ���
            show: false
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            show: false
        },
        axisTick: {            // ������С���
            show: false
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#aaa'],
                type: 'dashed'
            }
        },
        splitArea: {           // �ָ�����
            show: false
        }
    },

    polar : {
        name : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#ccc'
            }
        },
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        label: {
            textStyle:{
                color: '#ccc'
            }
        },
        lineStyle : {
            color : '#aaa'
        },
        controlStyle : {
            normal : { color : '#fff'},
            emphasis : { color : '#FE8463'}
        },
        symbolSize : 3
    },

    // ����ͼĬ�ϲ���
    line: {
        smooth : true
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',       // ���������ɫ
                color0: '#9BCA63',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#FE8463',   // ���߱߿���ɫ
                    color0: '#9BCA63'   // ���߱߿���ɫ
                }
            }
        }
    },

    // �״�ͼĬ�ϲ���
    radar : {
        symbol: 'emptyCircle',    // ͼ������
        symbolSize:3
        //symbol: null,         // �յ�ͼ������
        //symbolRotate : null,  // ͼ����ת����
    },

    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 1)'
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                borderColor:'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        // color: '#ccc'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#FE8463'
                },
                label: {
                    textStyle: {
                        // color: 'ccc'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#fff'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.2)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.9)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                width: 3,
                shadowColor : '#fff', //Ĭ��͸��
                shadowBlur: 10
            }
        },
        axisTick: {            // ������С���
            length :15,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto',
                shadowColor : '#fff', //Ĭ��͸��
                shadowBlur: 10
            }
        },
        axisLabel: {            // ������С���
            textStyle: {       // ����lineStyle����������ʽ
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor : '#fff', //Ĭ��͸��
                shadowBlur: 10
            }
        },
        splitLine: {           // �ָ���
            length :25,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                width:3,
                color: '#fff',
                shadowColor : '#fff', //Ĭ��͸��
                shadowBlur: 10
            }
        },
        pointer: {           // �ָ���
            shadowColor : '#fff', //Ĭ��͸��
            shadowBlur: 5
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor : '#fff', //Ĭ��͸��
                shadowBlur: 10
            }
        },
        detail : {
            shadowColor : '#fff', //Ĭ��͸��
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y����λpx
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        }
    },

    funnel : {
        itemStyle: {
            normal: {
                borderColor : 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1
            },
            emphasis: {
                borderColor : 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }
        }
    },

    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var defaultTheme = {}

var greenTheme = {
    // Ĭ��ɫ��
    color: [
        '#408829','#68a54a','#a9cba2','#86b379',
        '#397b29','#8abb6f','#759c6a','#bfd3b7'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#408829'
        }
    },
    
    // ֵ��
    dataRange: {
        color:['#1f610a','#97b58d']
    },

    // ������
    toolbox: {
        color : ['#408829','#408829','#408829','#408829']
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#408829',
                type: 'dashed'
            },
            crossStyle: {
                color: '#408829'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#eee',            // ���ݱ�����ɫ
        fillerColor: 'rgba(64,136,41,0.2)',   // �����ɫ
        handleColor: '#408829'     // �ֱ���ɫ
    },
    
    // ����
    grid: {
        borderWidth: 0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#408829'
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#408829'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#408829'
        },
        controlStyle : {
            normal : { color : '#408829'},
            emphasis : { color : '#408829'}
        }
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#68a54a',          // ���������ɫ
                color0: '#a9cba2',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#408829',   // ���߱߿���ɫ
                    color0: '#86b379'   // ���߱߿���ɫ
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#99d2dd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#408829'
                }
            }
        }
    },
    
    chord : {
        padding : 4,
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#86b379'],[0.8, '#68a54a'],[1, '#408829']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var romaTheme = {
    color: ['#E01F54','#b8d2c7','#f5e8c8','#001852','#c6b38e',
            '#a4d8c2','#f3d999','#d3758f','#dcc392','#2e4783',
            '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
            '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],
    dataRange: {
        color:['#e01f54','#e7dbc3'],
        textStyle: {
            color: '#333'
        }
    },
    k: {
        itemStyle: {
            normal: {
                color: '#e01f54',          
                color0: '#001852',      
                lineStyle: {
                    width: 1,
                    color: '#f5e8c8',
                    color0: '#b8d2c7'   
                }
            }
        }
    },
    pie: {
        itemStyle: {
            normal: {
                
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                  textStyle: {color: '#1b1b1b'},
                  lineStyle: {color: '#1b1b1b'}
                    
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            emphasis: {
                
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                label: {
                    show: false
                },
                labelLine: {
                    show: false,
                    length: 20,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 
                
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3d999'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#5182ab'
                },
                linkStyle : {
                    strokeColor : '#5182ab'
                }
            },
            emphasis: {
                label: {
                    show: false
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#E01F54'],[0.8, '#b8d2c7'],[1, '#001852']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    }
}

var redTheme = {
    // Ĭ��ɫ��
    color: [
        '#d8361b','#f16b4c','#f7b4a9','#d26666',
        '#99311c','#c42703','#d07e75'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#d8361b'
        }
    },
    
    // ֵ��
    dataRange: {
        color:['#bd0707','#ffd2d2']
    },

    // ������
    toolbox: {
        color : ['#d8361b','#d8361b','#d8361b','#d8361b']
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#d8361b',
                type: 'dashed'
            },
            crossStyle: {
                color: '#d8361b'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#eee',            // ���ݱ�����ɫ
        fillerColor: 'rgba(216,54,27,0.2)',   // �����ɫ
        handleColor: '#d8361b'     // �ֱ���ɫ
    },
    
    // ����
    grid: {
        borderWidth: 0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#d8361b'
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#d8361b'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#d8361b'
        },
        controlStyle : {
            normal : { color : '#d8361b'},
            emphasis : { color : '#d8361b'}
        }
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#f16b4c',          // ���������ɫ
                color0: '#f7b4a9',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#d8361b',   // ���߱߿���ɫ
                    color0: '#d26666'   // ���߱߿���ɫ
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#99d2dd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#d8361b'
                }
            }
        }
    },
    
    chord : {
        padding : 4,
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#f16b4c'],[0.8, '#d8361b'],[1, '#99311c']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};


var mTheme = {
    // ȫͼĬ�ϱ���
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // Ĭ��ɫ��
    color: ['#8aedd5','#93bc9e','#cef1db','#7fe579','#a6d7c2',
            '#bef0bb','#99e2vb','#94f8a8','#7de5b8','#4dfb70'],

    
    
    // ֵ��
    dataRange: {
        color:['#93bc92','#bef0bb']
    },

    // K��ͼĬ�ϲ���
    k: {
        // barWidth : null          // Ĭ������Ӧ
        // barMaxWidth : null       // Ĭ������Ӧ 
        itemStyle: {
            normal: {
                color: '#8aedd5',          // ���������ɫ
                color0: '#7fe579',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#8aedd5',   // ���߱߿���ɫ
                    color0: '#7fe579'   // ���߱߿���ɫ
                }
            },
            emphasis: {
                // color: ����,
                // color0: ����
            }
        }
    },
    
    // ��ͼĬ�ϲ���
    pie: {
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                  textStyle: {color: '#1b1b1b'},
                  lineStyle: {color: '#1b1b1b'}
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: ����,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },
    
    map: {
        mapType: 'china',   // ��ʡ��mapType��ʱ��������
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // ����Ӧ
            // height   // ����Ӧ
        },
        showLegendSymbol : true,       // ��ʾͼ����ɫ��ʶ��ϵ�б�ʶ��СԲ�㣩������legendʱ��Ч
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                // color: ����,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3f39d'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#49b485'
                },
                linkStyle : {
                    strokeColor : '#49b485'
                }
            },
            emphasis: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#93bc9e'],[0.8, '#8aedd5'],[1, '#a6d7c2']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    }
};
     
var macarons2Theme = {
    // ȫͼĬ�ϱ���
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // Ĭ��ɫ��
    color: ['#ed9678','#e7dac9','#cb8e85','#f3f39d','#c8e49c',
            '#f16d7a','#f3d999','#d3758f','#dcc392','#2e4783',
            '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
            '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],
    
    // ֵ��
    dataRange: {
        color:['#cb8e85','#e7dac9'],//��ɫ 
        //text:['��','��'],         // �ı���Ĭ��Ϊ��ֵ�ı�
        textStyle: {
            color: '#333'          // ֵ��������ɫ
        }
    },


    // ����ͼĬ�ϲ���
    bar: {
        barMinHeight: 0,          // ��С�߶ȸ�Ϊ0
        // barWidth: null,        // Ĭ������Ӧ
        barGap: '30%',            // ������룬Ĭ��Ϊ���ο�ȵ�30%������̶�ֵ
        barCategoryGap : '20%',   // ��Ŀ�����ξ��룬Ĭ��Ϊ��Ŀ����20%������̶�ֵ
        itemStyle: {
            normal: {
                // color: '����',
                barBorderColor: '#fff',       // ��������
                barBorderRadius: 0,           // ��������Բ�ǣ���λpx��Ĭ��Ϊ0
                barBorderWidth: 1,            // ���������߿���λpx��Ĭ��Ϊ1
                label: {
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                }
            },
            emphasis: {
                // color: '����',
                barBorderColor: 'rgba(0,0,0,0)',   // ��������
                barBorderRadius: 0,                // ��������Բ�ǣ���λpx��Ĭ��Ϊ0
                barBorderWidth: 1,                 // ���������߿���λpx��Ĭ��Ϊ1
                label: {
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                }
            }
        }
    },

    // ����ͼĬ�ϲ���
    line: {
        itemStyle: {
            normal: {
                // color: ����,
                label: {
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                lineStyle: {
                    width: 2,
                    type: 'solid',
                    shadowColor : 'rgba(0,0,0,0)', //Ĭ��͸��
                    shadowBlur: 5,
                    shadowOffsetX: 3,
                    shadowOffsetY: 3
                }
            },
            emphasis: {
                // color: ����,
                label: {
                    show: false
                    // position: Ĭ������Ӧ��ˮƽ����Ϊ'top'����ֱ����Ϊ'right'����ѡΪ
                    //           'inside'|'left'|'right'|'top'|'bottom'
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                }
            }
        },
        //smooth : false,
        //symbol: null,         // �յ�ͼ������
        symbolSize: 2,          // �յ�ͼ�δ�С
        //symbolRotate : null,  // �յ�ͼ����ת����
        showAllSymbol: false    // ��־ͼ��Ĭ��ֻ��������ʾ���������ǩ������ز��ԣ�
    },
    
    // K��ͼĬ�ϲ���
    k: {
        // barWidth : null          // Ĭ������Ӧ
        // barMaxWidth : null       // Ĭ������Ӧ 
        itemStyle: {
            normal: {
                color: '#fe9778',          // ���������ɫ
                color0: '#e7dac9',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#f78766',   // ���߱߿���ɫ
                    color0: '#f1ccb8'   // ���߱߿���ɫ
                }
            },
            emphasis: {
                // color: ����,
                // color0: ����
            }
        }
    },

    // ��ͼĬ�ϲ���
    pie: {
        center : ['50%', '50%'],    // Ĭ��ȫ�־���
        radius : [0, '75%'],
        clockWise : false,          // Ĭ����ʱ��
        startAngle: 90,
        minAngle: 0,                // ��С�Ƕȸ�Ϊ0
        selectedOffset: 10,         // ѡ��������ƫ����
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                  textStyle: {color: '#1b1b1b'},
                  lineStyle: {color: '#1b1b1b'}
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: ����,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },
    
    map: {
        mapType: 'china',   // ��ʡ��mapType��ʱ��������
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // ����Ӧ
            // height   // ����Ӧ
        },
        showLegendSymbol : true,       // ��ʾͼ����ɫ��ʶ��ϵ�б�ʶ��СԲ�㣩������legendʱ��Ч
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                // color: ����,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3f39d'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#a17e6e'
                },
                linkStyle : {
                    strokeColor : '#a17e6e'
                }
            },
            emphasis: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },

    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#ed9678'],[0.8, '#e7dac9'],[1, '#cb8e85']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    }
};
                
var infographicTheme = {
    // Ĭ��ɫ��
    color: [
        '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
        '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
        '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#27727B'          // ������������ɫ
        }
    },

    // ֵ��
    dataRange: {
        x:'right',
        y:'center',
        itemWidth: 5,
        itemHeight:25,
        color:['#C1232B','#FCCE10']
    },

    toolbox: {
        color : [
            '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
            '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD'
        ],
        effectiveColor : '#ff4500'
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(50,50,50,0.5)',     // ��ʾ������ɫ��Ĭ��Ϊ͸����Ϊ0.7�ĺ�ɫ
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#27727B',
                type: 'dashed'
            },
            crossStyle: {
                color: '#27727B'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: 'rgba(181,195,52,0.3)',            // ���ݱ�����ɫ
        fillerColor: 'rgba(181,195,52,0.2)',   // �����ɫ
        handleColor: '#27727B'    // �ֱ���ɫ
    },

    // ����
    grid: {
        borderWidth:0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#27727B'
            }
        },
        splitLine: {           // �ָ���
            show: false
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            show: false
        },
        splitArea : {
            show: false
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#ccc'],
                type: 'dashed'
            }
        }
    },

    polar : {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#27727B'
        },
        controlStyle : {
            normal : { color : '#27727B'},
            emphasis : { color : '#27727B'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    // ����ͼĬ�ϲ���
    line: {
        itemStyle: {
            normal: {
                borderWidth:2,
                borderColor:'#fff',
                lineStyle: {
                    width: 3
                }
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'circle',  // �յ�ͼ������
        symbolSize: 3.5           // �յ�ͼ�δ�С
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#C1232B',       // ���������ɫ
                color0: '#B5C334',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#C1232B',   // ���߱߿���ɫ
                    color0: '#B5C334'   // ���߱߿���ɫ
                }
            }
        }
    },

    // ɢ��ͼĬ�ϲ���
    scatter: {
        itemStyle: {
            normal: {
                borderWidth:1,
                borderColor:'rgba(200,200,200,0.5)'
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'star4',    // ͼ������
        symbolSize: 4        // ͼ�δ�С������뾶����������ͼ��Ϊ������������ܿ��ΪsymbolSize * 2
    },

    // �״�ͼĬ�ϲ���
    radar : {
        symbol: 'emptyCircle',    // ͼ������
        symbolSize:3
        //symbol: null,         // �յ�ͼ������
        //symbolRotate : null,  // ͼ����ת����
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#C1232B'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#fe994e'
                },
                label: {
                    textStyle: {
                        color: 'rgb(100,0,0)'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#27727B'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {
        center:['50%','80%'],
        radius:'100%',
        startAngle: 180,
        endAngle : 0,
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#B5C334'],[0.8, '#27727B'],[1, '#C1232B']],
                width: '40%'
            }
        },
        axisTick: {            // ������С���
            splitNumber: 2,   // ÿ��splitϸ�ֶ��ٶ�
            length: 5,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#fff'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#fff',
                fontWeight:'bolder'
            }
        },
        splitLine: {           // �ָ���
            length: '5%',         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: '#fff'
            }
        },
        pointer : {
            width : '40%',
            length: '80%',
            color: '#fff'
        },
        title : {
          offsetCenter: [0, -20],       // x, y����λpx
          textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
            color: 'auto',
            fontSize: 20
          }
        },
        detail : {
            offsetCenter: [0, 0],       // x, y����λpx
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto',
                fontSize: 40
            }
        }
    },

    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var helianthusTheme = {
    backgroundColor: '#F2F2E6',
    // Ĭ��ɫ��
    color: [
        '#44B7D3','#E42B6D','#F4E24E','#FE9616','#8AED35',
        '#ff69b4','#ba55d3','#cd5c5c','#ffa500','#40e0d0',
        '#E95569','#ff6347','#7b68ee','#00fa9a','#ffd700',
        '#6699FF','#ff6666','#3cb371','#b8860b','#30e0e0'
    ],

    // ͼ�����
    title: {
        backgroundColor: '#F2F2E6',
        itemGap: 10,               // ������������������λpx��Ĭ��Ϊ10��
        textStyle: {
            color: '#8A826D'          // ������������ɫ
        },
        subtextStyle: {
            color: '#E877A3'          // ������������ɫ
        }
    },

    // ֵ��
    dataRange: {
        x:'right',
        y:'center',
        itemWidth: 5,
        itemHeight:25,
        color:['#E42B6D','#F9AD96'],
        text:['��','��'],         // �ı���Ĭ��Ϊ��ֵ�ı�
        textStyle: {
            color: '#8A826D'          // ֵ��������ɫ
        }
    },

    toolbox: {
        color : ['#E95569','#E95569','#E95569','#E95569'],
        effectiveColor : '#ff4500',
        itemGap: 8
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(138,130,109,0.7)',     // ��ʾ������ɫ��Ĭ��Ϊ͸����Ϊ0.7�ĺ�ɫ
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#6B6455',
                type: 'dashed'
            },
            crossStyle: {          //ʮ��׼��ָʾ��
                color: '#A6A299'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: 'rgba(130,197,209,0.6)',            // ���ݱ�����ɫ
        fillerColor: 'rgba(233,84,105,0.1)',   // �����ɫ
        handleColor: 'rgba(107,99,84,0.8)'     // �ֱ���ɫ
    },

    // ����
    grid: {
        borderWidth:0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#6B6455'
            }
        },
        splitLine: {           // �ָ���
            show: false
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            show: false
        },
        splitArea : {
            show: false
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#FFF'],
                type: 'dashed'
            }
        }
    },

    polar : {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#6B6455'
        },
        controlStyle : {
            normal : { color : '#6B6455'},
            emphasis : { color : '#6B6455'}
        },
        symbol : 'emptyCircle',
        symbolSize : 3
    },

    // ����ͼĬ�ϲ���
    bar: {
        itemStyle: {
            normal: {
                barBorderRadius: 0
            },
            emphasis: {
                barBorderRadius: 0
            }
        }
    },

    // ����ͼĬ�ϲ���
    line: {
        smooth : true,
        symbol: 'emptyCircle',  // �յ�ͼ������
        symbolSize: 3           // �յ�ͼ�δ�С
    },


    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#E42B6D',       // ���������ɫ
                color0: '#44B7D3',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#E42B6D',   // ���߱߿���ɫ
                    color0: '#44B7D3'   // ���߱߿���ɫ
                }
            }
        }
    },

    // ɢ��ͼĬ�ϲ���
    scatter: {
        itemStyle: {
            normal: {
                borderWidth:1,
                borderColor:'rgba(200,200,200,0.5)'
            },
            emphasis: {
                borderWidth:0
            }
        },
        symbol: 'circle',    // ͼ������
        symbolSize: 4        // ͼ�δ�С������뾶����������ͼ��Ϊ������������ܿ��ΪsymbolSize * 2
    },

    // �״�ͼĬ�ϲ���
    radar : {
        symbol: 'emptyCircle',    // ͼ������
        symbolSize:3
        //symbol: null,         // �յ�ͼ������
        //symbolRotate : null,  // ͼ����ת����
    },

    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#E42B6D'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#fe994e'
                },
                label: {
                    textStyle: {
                        color: 'rgb(100,0,0)'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                nodeStyle : {
                    borderColor : 'rgba(0,0,0,0)'
                },
                linkStyle : {
                    color : '#6B6455'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                chordStyle : {
                    lineStyle : {
                        width : 0,
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                chordStyle : {
                    lineStyle : {
                        width : 1,
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },

    gauge : {                  // �Ǳ���
        center:['50%','80%'],
        radius:'100%',
        startAngle: 180,
        endAngle : 0,
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#44B7D3'],[0.8, '#6B6455'],[1, '#E42B6D']],
                width: '40%'
            }
        },
        axisTick: {            // ������С���
            splitNumber: 2,   // ÿ��splitϸ�ֶ��ٶ�
            length: 5,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#fff'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#fff',
                fontWeight:'bolder'
            }
        },
        splitLine: {           // �ָ���
            length: '5%',         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: '#fff'
            }
        },
        pointer : {
            width : '40%',
            length: '80%',
            color: '#fff'
        },
        title : {
          offsetCenter: [0, -20],       // x, y����λpx
          textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
            color: 'auto',
            fontSize: 20
          }
        },
        detail : {
            offsetCenter: [0, 0],       // x, y����λpx
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto',
                fontSize: 40
            }
        }
    },

    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var grayTheme = {
    // Ĭ��ɫ��
    color: [
        '#757575','#c7c7c7','#dadada',
        '#8b8b8b','#b5b5b5','#e9e9e9'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#757575'
        }
    },
    
    // ֵ��
    dataRange: {
        color:['#636363','#dcdcdc']
    },

    // ������
    toolbox: {
        color : ['#757575','#757575','#757575','#757575']
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        axisPointer : {            // ������ָʾ���������ᴥ����Ч
            type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
            lineStyle : {          // ֱ��ָʾ����ʽ����
                color: '#757575',
                type: 'dashed'
            },
            crossStyle: {
                color: '#757575'
            },
            shadowStyle : {                     // ��Ӱָʾ����ʽ����
                color: 'rgba(200,200,200,0.3)'
            }
        }
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#eee',            // ���ݱ�����ɫ
        fillerColor: 'rgba(117,117,117,0.2)',   // �����ɫ
        handleColor: '#757575'     // �ֱ���ɫ
    },
    
    // ����
    grid: {
        borderWidth: 0
    },

    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#757575'
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            lineStyle: {       // ����lineStyle����������ʽ
                color: '#757575'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
            }
        },
        splitLine: {           // �ָ���
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: ['#eee']
            }
        }
    },

    timeline : {
        lineStyle : {
            color : '#757575'
        },
        controlStyle : {
            normal : { color : '#757575'},
            emphasis : { color : '#757575'}
        }
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#8b8b8b',          // ���������ɫ
                color0: '#dadada',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#757575',   // ���߱߿���ɫ
                    color0: '#c7c7c7'   // ���߱߿���ɫ
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#99d2dd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#757575'
                }
            }
        }
    },
    
    chord : {
        padding : 4,
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#b5b5b5'],[0.8, '#757575'],[1, '#5c5c5c']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var shineTheme = {
    // Ĭ��ɫ��
    color: [
        '#c12e34','#e6b600','#0098d9','#2b821d',
        '#005eaa','#339ca8','#cda819','#32a487'
    ],

    // ͼ�����
    title: {
        textStyle: {
            fontWeight: 'normal'
        }
    },
    
    // ֵ��
    dataRange: {
        itemWidth: 15,             // ֵ��ͼ�ο�ȣ����Խ���ˮƽ���ֿ��Ϊ��ֵ * 10
        color:['#1790cf','#a2d4e6']
    },

    // ������
    toolbox: {
        color : ['#06467c','#00613c','#872d2f','#c47630']
    },

    // ��ʾ��
    tooltip: {
        backgroundColor: 'rgba(0,0,0,0.6)'
    },

    // �������ſ�����
    dataZoom: {
        dataBackgroundColor: '#dedede',            // ���ݱ�����ɫ
        fillerColor: 'rgba(154,217,247,0.2)',   // �����ɫ
        handleColor: '#005eaa'     // �ֱ���ɫ
    },
    
    // ����
    grid: {
        borderWidth: 0
    },
    
    // ��Ŀ��
    categoryAxis: {
        axisLine: {            // ��������
            show: false
        },
        axisTick: {            // ������С���
            show: false
        }
    },

    // ��ֵ��������Ĭ�ϲ���
    valueAxis: {
        axisLine: {            // ��������
            show: false
        },
        axisTick: {            // ������С���
            show: false
        },
        splitArea: {           // �ָ�����
            show: true,       // Ĭ�ϲ���ʾ������show������ʾ���
            areaStyle: {       // ����areaStyle�����areaStyle������������ʽ
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        }
    },
    
    timeline : {
        lineStyle : {
            color : '#005eaa'
        },
        controlStyle : {
            normal : { color : '#005eaa'},
            emphasis : { color : '#005eaa'}
        }
    },

    // K��ͼĬ�ϲ���
    k: {
        itemStyle: {
            normal: {
                color: '#c12e34',          // ���������ɫ
                color0: '#2b821d',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#c12e34',   // ���߱߿���ɫ
                    color0: '#2b821d'   // ���߱߿���ɫ
                }
            }
        }
    },
    
    map: {
        itemStyle: {
            normal: {
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                areaStyle: {
                    color: '#e6b600'
                },
                label: {
                    textStyle: {
                        color: '#c12e34'
                    }
                }
            }
        }
    },
    
    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#005eaa'
                }
            }
        }
    },
    
    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.5)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(128, 128, 128, 0.5)'
                    }
                }
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#2b821d'],[0.8, '#005eaa'],[1, '#c12e34']], 
                width: 5
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :8,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 12,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            width : 3,
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    },
    
    textStyle: {
        fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
    }
};

var sakuraTheme = {
    // ȫͼĬ�ϱ���
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // Ĭ��ɫ��
    color: ['#e52c3c','#f7b1ab','#fa506c','#f59288','#f8c4d8',
            '#e54f5c','#f06d5c','#e54f80','#f29c9f','#eeb5b7'],

    // ֵ��
    dataRange: {
        color:['#e52c3c','#f7b1ab']//��ɫ 
    },

    
    // K��ͼĬ�ϲ���
    k: {
        // barWidth : null          // Ĭ������Ӧ
        // barMaxWidth : null       // Ĭ������Ӧ 
        itemStyle: {
            normal: {
                color: '#e52c3c',          // ���������ɫ
                color0: '#f59288',      // ���������ɫ
                lineStyle: {
                    width: 1,
                    color: '#e52c3c',   // ���߱߿���ɫ
                    color0: '#f59288'   // ���߱߿���ɫ
                }
            },
            emphasis: {
                // color: ����,
                // color0: ����
            }
        }
    },
    
    // ��ͼĬ�ϲ���
    pie: {
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                label: {
                    show: true,
                    position: 'outer',
                  textStyle: {color: 'black'}
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                labelLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        // color: ����,
                        width: 1,
                        type: 'solid'
                    }
                }
            }
        }
    },
    
    map: {
        mapType: 'china',   // ��ʡ��mapType��ʱ��������
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // ����Ӧ
            // height   // ����Ӧ
        },
        showLegendSymbol : true,       // ��ʾͼ����ɫ��ʶ��ϵ�б�ʶ��СԲ�㣩������legendʱ��Ч
        itemStyle: {
            normal: {
                // color: ����,
                borderColor: '#fff',
                borderWidth: 1,
                areaStyle: {
                    color: '#ccc'//rgba(135,206,250,0.8)
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // Ҳ��ѡ����ʽ
                // color: ����,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: '#f3f39d'
                },
                label: {
                    show: false,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    },
    
    force : {
        // �������������ʽ�Ḳ�ǽڵ�Ĭ����ʽ
        itemStyle: {
            normal: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {
                    brushType : 'both',
                    strokeColor : '#e54f5c'
                },
                linkStyle : {
                    strokeColor : '#e54f5c'
                }
            },
            emphasis: {
                // color: ����,
                label: {
                    show: false
                    // textStyle: null      // Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                },
                nodeStyle : {},
                linkStyle : {}
            }
        }
    },
    
    gauge : {
        axisLine: {            // ��������
            show: true,        // Ĭ����ʾ������show������ʾ���
            lineStyle: {       // ����lineStyle����������ʽ
                color: [[0.2, '#e52c3c'],[0.8, '#f7b1ab'],[1, '#fa506c']], 
                width: 8
            }
        },
        axisTick: {            // ������С���
            splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
            length :12,        // ����length�����߳�
            lineStyle: {       // ����lineStyle����������ʽ
                color: 'auto'
            }
        },
        axisLabel: {           // �������ı���ǩ�����axis.axisLabel
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: {           // �ָ���
            length : 18,         // ����length�����߳�
            lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                color: 'auto'
            }
        },
        pointer : {
            length : '90%',
            color : 'auto'
        },
        title : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: '#333'
            }
        },
        detail : {
            textStyle: {       // ��������Ĭ��ʹ��ȫ���ı���ʽ�����TEXTSTYLE
                color: 'auto'
            }
        }
    }
};






