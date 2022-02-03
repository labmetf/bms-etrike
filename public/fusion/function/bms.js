function myFunction(){

    var get = 'val'
    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var val = data.value;
            
            //console.log(val);
            //console.log(val[0]["voltage"])
            var datval = [];
            var val2 = data.general;
            $('#battery_total_voltage_detail').html(val2[0].total_voltage.toFixed(2)+" V");
            $('#battery_avg_temp_detail').html(val2[0].avg_temperature.toFixed(2)+" &#8451;");
            $('#battery_avg_voltage_detail').html(val2[0].avg_voltage.toFixed(2)+" V");
            $('#battery_avg_soc_detail').html(val2[0].avg_soc.toFixed(2)+" %");
            $('#battery_max_temp_detail').html(val2[0].max_temperature.toFixed(2)+" &#8451;");
            $('#battery_max_voltage_detail').html(val2[0].max_voltage.toFixed(2)+" V");
            $('#battery_max_soc_detail').html(val2[0].max_soc.toFixed(2)+" %");
            $('#battery_min_temp_detail').html(val2[0].min_temperature.toFixed(2)+" &#8451;");
            $('#battery_min_voltage_detail').html(val2[0].min_voltage.toFixed(2)+" V");
            $('#battery_min_soc_detail').html(val2[0].min_soc.toFixed(2)+" %");
                  
            for (let i = 0 ; i < val.length  ; i++) {
            
                //if (val[i]['cell_id'] == i+1) {
                
                    var rc = rcFunction(val[i]['cell_id']);
                    
                    var dat = {'rowid':rc['row'],
                    'columnid':rc['col'] ,
                    'value': val[i]['voltage'], 
                    'trlabel': String(val[i]['temperature']) + " °C", 
                    'brlabel': String((val[i]['soc']).toFixed(2)) + " %",
                    'tllabel': "Cell ID " + val[i]['cell_id']
                     }
                    
                    datval.push(dat);
                //};
            
            };
            
            console.log(datval);
            
            $("#chart-container").insertFusionCharts({
              type: 'hled',
              id: 'myHLED',
              width: '350',
              height: '150',
              dataFormat: 'json',
              dataSource: {
                "chart": {
                  //"caption": "Battery Capacity",
                  "lowerLimit": "0",
                  "upperLimit": "100",
                  "lowerLimitDisplay": "Empty",
                  "upperLimitDisplay": "Full",
                  "numberSuffix": "%",
                  "valueFontSize": "12",
                  "origW": "300",
                  "origH": "200",
                  "ledGap": "0",
                  "showhovereffect": "1",
                  //Single Fill color
                  "useSameFillColor": "1",
                  "useSameFillBgColor": "1",
                  "showValue" : "0",
                  "chartTopMargin": "30",
                  "chartBottomMargin": "30",
                  //"dataStreamURL": "http://192.168.10.150/val",
                  //"refreshInterval": "5",
                  "theme": "fusion"
                },
                //All annotations are grouped under this element
                "annotations": {
                  "showbelow": "1",
                  "groups": [{
                    //Each group needs a unique ID
                    "id": "indicator",
                    "items": [
        
                      {
                        "id": "bgRectAngle",
                        //Polygon item
                        "type": "rectangle",
                        "radius": "5",
                        "fillColor": "#333333",
                        "x": "$gaugeEndX - 10",
                        "tox": "$gaugeEndX + 12",
                        "y": "$gaugeCenterY-20",
                        "toy": "$gaugeCenterY + 20"
                      }
                    ]
                  }]
                },
                "colorRange": {
                  "color": [{
                    "minValue": "0",
                    "maxValue": "45",
                    "code": "#e44a00"
                  }, {
                    "minValue": "45",
                    "maxValue": "75",
                    "code": "#f8bd19"
                  }, {
                    "minValue": "75",
                    "maxValue": "100",
                    "code": "#6baa01"
                  }]
                },
                "value": val2[0].min_soc.toFixed(2)
              }
        
            })
            
            
            $("#bms-container").insertFusionCharts({
                id: "beranda1",
                type: "heatmap",
                width: "100%",
                height: "50%",
                dataFormat: "json",
                dataSource: {
                chart: {
                    theme: "fusion",
                    showvalues: "1",
                    chartLeftMargin: "100",
                    chartRightMargin: "100",
                    mapbycategory: "0",
                    showYaxisLabels : 0,
                    showXaxisLabels : 0,
                    decimals : 2,
                    tlFontSize : 14,
                    trFontSize : 14,
                    brFontSize : 14,
                    valueFontSize : 18,
                    plottooltext:
                    "<div><b>$tllabel</b><br/>Voltage: $datavalue Volt <br/>Temperature: $trlabel <br/>SoC: $brlabel</div>"
                },
                dataset: [
                    {
                    data: datval
                    },
                ],
                columns: {
                    column: [
                      {
                        id: "x1",
                        label: "English"
                      },
                      {
                        id: "x2",
                        label: "Maths"
                      },
                      {
                        id: "x3",
                        label: "Physics"
                      },
                      {
                        id: "x4",
                        label: "History"
                      },
                      {
                        id: "x5",
                        label: "Economics"
                      }
                    ]
              },
              rows: {
                    row: [
                      {
                        id: "a",
                        label: "Jacob"
                      },
                      {
                        id: "b",
                        label: "Emma"
                      },
                      {
                        id: "c",
                        label: "Jayden"
                      },
                      {
                        id: "d",
                        label: "William"
                      }
                    ]},
                "colorrange": {
                    "gradient": 0,
                    "minvalue": "0",
                    "code": "E24B1A",
                    "startlabel": "Poor",
                    "endlabel": "Good",
                    "color": [
                        {
                            "code": "000000",
                            "minvalue": "0",
                            "maxvalue": "1",
                            "label": "Error"
                        },
                        {
                            "code": "E24B1A",
                            "minvalue": "2",
                            "maxvalue": "3",
                            "label": "Bad"
                        },
                        {
                            "code": "F6BC33",
                            "minvalue": "3",
                            "maxvalue": "3.9",
                            "label": "Average"
                        },
                        {
                            "code": "6DA81E",
                            "minvalue": "3.9",
                            "maxvalue": "4.5",
                            "label": "Good"
                        }
                    ]
                }
                }
            });

        });
        });
};

function rcFunction(f){
  if (f == 1) {
    var row = 'a'
    var col = 'x1'
  }
  else if  (f == 2) {
        row = 'a'
        col = 'x2'
  }
  else if  (f == 3) {
        row = 'a'
        col = 'x3'
  }
  else if  (f == 4) {
        row = 'a'
        col = 'x4'
  }
  else if  (f == 5) {
        row = 'a'
        col = 'x5'
  }
  else if  (f == 6) {
        row = 'b'
        col = 'x1'
  }
  else if  (f == 7) {
        row = 'b'
        col = 'x2'
  }
  else if  (f == 8) {
        row = 'b'
        col = 'x3'
  }
  else if  (f == 9) {
        row = 'b'
        col = 'x4'
  }
  else if  (f == 10) {
        row = 'b'
        col = 'x5'
  }
  else if  (f == 11) {
        row = 'c'
        col = 'x1'
  }
  else if  (f == 12) {
        row = 'c'
        col = 'x2'
  }
  else if  (f == 13) {
        row = 'c'
        col = 'x3'
  }
  else if  (f == 14) {
        row = 'c'
        col = 'x4'
  }
  else if  (f == 15) {
        row = 'c'
        col = 'x5'
  }
  else if  (f == 16) {
        row = 'd'
        col = 'x1'
  }
  else if  (f == 17) {
        row = 'd'
        col = 'x2'
  }
  else if  (f == 18) {
        row = 'd'
        col = 'x3'
  }
  else if  (f == 19) {
        row = 'd'
        col = 'x4'
  }
  else if  (f == 20) {
        row = 'd'
        col = 'x5'
  }
  
  return {row,col};

}

//console.log(rcFunction(2)['row']);
myFunction();


var myVar = setInterval(function() {
    updateData();
  }, 30000);
  
function updateData() {
    console.log("data updated")

    var chartBms = FusionCharts("beranda1") 
    var chartSoc = FusionCharts("myHLED") 


    var get = 'val'

    jQuery(document).ready(function ($) {
        $.getJSON(get, function(data) {
            var val = data.value;
            //console.log(val);
            //console.log(val[0]["voltage"])
            var datval = [];

            var val2 = data.general;

            
            $('#battery_total_voltage_detail').html(val2[0].total_voltage.toFixed(2)+" V");
            $('#battery_avg_temp_detail').html(val2[0].avg_temperature.toFixed(2)+" &#8451;");
            $('#battery_avg_voltage_detail').html(val2[0].avg_voltage.toFixed(2)+" V");
            $('#battery_avg_soc_detail').html(val2[0].avg_soc.toFixed(2)+" %");
            $('#battery_max_temp_detail').html(val2[0].max_temperature.toFixed(2)+" &#8451;");
            $('#battery_max_voltage_detail').html(val2[0].max_voltage.toFixed(2)+" V");
            $('#battery_max_soc_detail').html(val2[0].max_soc.toFixed(2)+" %");
            $('#battery_min_temp_detail').html(val2[0].min_temperature.toFixed(2)+" &#8451;");
            $('#battery_min_voltage_detail').html(val2[0].min_voltage.toFixed(2)+" V");
            $('#battery_min_soc_detail').html(val2[0].min_soc.toFixed(2)+" %");
            
            for (let i = 0 ; i < val.length  ; i++) {
            
                //if (val[i]['cell_id'] == i+1) {
                
                    var rc = rcFunction(val[i]['cell_id']);
                    
                    var dat = {'rowid':rc['row'],
                    'columnid':rc['col'] ,
                    'value': val[i]['voltage'], 
                    'trlabel': String(val[i]['temperature']) + " °C", 
                    'brlabel': String((val[i]['soc']).toFixed(2)) + " %",
                    'tllabel': "Cell ID " + val[i]['cell_id']
                     }
                    
                    datval.push(dat);
                //};
            
            };
            
            console.log(datval);
            
            var soc_updated = {
              "chart": {
                //"caption": "Battery Capacity",
                "lowerLimit": "0",
                "upperLimit": "100",
                "lowerLimitDisplay": "Empty",
                "upperLimitDisplay": "Full",
                "numberSuffix": "%",
                "valueFontSize": "12",
                "origW": "300",
                "origH": "200",
                "ledGap": "0",
                "showhovereffect": "1",
                //Single Fill color
                "useSameFillColor": "1",
                "useSameFillBgColor": "1",
                "showValue" : "0",
                "chartTopMargin": "30",
                "chartBottomMargin": "30",
                //"dataStreamURL": "http://192.168.10.150/val",
                //"refreshInterval": "5",
                "theme": "fusion"
              },
              //All annotations are grouped under this element
              "annotations": {
                "showbelow": "1",
                "groups": [{
                  //Each group needs a unique ID
                  "id": "indicator",
                  "items": [
      
                    {
                      "id": "bgRectAngle",
                      //Polygon item
                      "type": "rectangle",
                      "radius": "5",
                      "fillColor": "#333333",
                      "x": "$gaugeEndX - 10",
                      "tox": "$gaugeEndX + 12",
                      "y": "$gaugeCenterY-20",
                      "toy": "$gaugeCenterY + 20"
                    }
                  ]
                }]
              },
              "colorRange": {
                "color": [{
                  "minValue": "0",
                  "maxValue": "45",
                  "code": "#e44a00"
                }, {
                  "minValue": "45",
                  "maxValue": "75",
                  "code": "#f8bd19"
                }, {
                  "minValue": "75",
                  "maxValue": "100",
                  "code": "#6baa01"
                }]
              },
              "value": val2[0].min_soc.toFixed(2)
            };

            var bms_updated = {
                              chart: {
                                theme: "fusion",
                                showvalues: "1",
                                chartLeftMargin: "100",
                                chartRightMargin: "100",
                                mapbycategory: "0",
                                showYaxisLabels : 0,
                                showXaxisLabels : 0,
                                decimals : 2,
                                tlFontSize : 14,
                                trFontSize : 14,
                                brFontSize : 14,
                                valueFontSize : 18,
                                plottooltext:
                                "<div><b>$tllabel</b><br/>Voltage: $datavalue Volt <br/>Temperature: $trlabel <br/>SoC: $brlabel</div>"
                            },
                            dataset: [
                                {
                                data: datval
                                },
                            ],
                            columns: {
                                column: [
                                  {
                                    id: "x1",
                                    label: "English"
                                  },
                                  {
                                    id: "x2",
                                    label: "Maths"
                                  },
                                  {
                                    id: "x3",
                                    label: "Physics"
                                  },
                                  {
                                    id: "x4",
                                    label: "History"
                                  },
                                  {
                                    id: "x5",
                                    label: "Economics"
                                  }
                                ]
                          },
                          rows: {
                                row: [
                                  {
                                    id: "a",
                                    label: "Jacob"
                                  },
                                  {
                                    id: "b",
                                    label: "Emma"
                                  },
                                  {
                                    id: "c",
                                    label: "Jayden"
                                  },
                                  {
                                    id: "d",
                                    label: "William"
                                  }
                                ]},
                            "colorrange": {
                                "gradient": 0,
                                "minvalue": "0",
                                "code": "E24B1A",
                                "startlabel": "Poor",
                                "endlabel": "Good",
                                "color": [
                                    {
                                        "code": "000000",
                                        "minvalue": "0",
                                        "maxvalue": "1",
                                        "label": "Error"
                                    },
                                    {
                                        "code": "E24B1A",
                                        "minvalue": "2",
                                        "maxvalue": "3",
                                        "label": "Bad"
                                    },
                                    {
                                        "code": "F6BC33",
                                        "minvalue": "3",
                                        "maxvalue": "3.9",
                                        "label": "Average"
                                    },
                                    {
                                        "code": "6DA81E",
                                        "minvalue": "3.9",
                                        "maxvalue": "4.5",
                                        "label": "Good"
                                    }
                                ]
                            }
            
            
            };


            chartBms.setChartData(bms_updated, "json");
            chartSoc.setChartData(soc_updated, "json");
            });
        })
};