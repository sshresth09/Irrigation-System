var dt = new Date(2024, 4, 29).getTime(),
        cnt = 0,
        useShift = true,
        INTERVAL_ID;
      var chart = JSC.chart(
        'chartDiv',
        {
          debug: true,
          legend_position: 'inside top right',
          yAxis_formatString: 'c',
          defaultSeries: { type: 'line', opacity: 1 },
          title_label_text: 'Data Total: %sum Average: %average',
          defaultPoint: {
            label_text: '%yValue',
            marker: {
              type: 'circle',
              size: 11,
              outline: { color: 'white', width: 2 }
            }
          },
          xAxis_overflow: 'hidden',
          margin_right: 20,
          animation: { duration: 400 },
          toolbar: {
            margin: 5,
            items: {
              'Shift Values': {
                type: 'checkbox',
                value: true,
                tooltip:
                  'The shift option determines whether the first point in the series is removed when adding a new point.',
                events: { change: shiftPoints_btnClick }
              },
              Stop: {
                type: 'option',
                icon_name: 'system/default/pause',
                boxVisible: true,
                label_text: 'Pause',
                events: { change: playPause },
                states_select: {
                  icon_name: 'system/default/play',
                  label_text: 'Play'
                }
              }
            }
          },
          xAxis: { scale_type: 'time' },
          series: [
            {
              name: 'Purchases',
              points: [
                ['1/1/2020', 29.9],
                ['1/2/2020', 71.5],
                ['1/3/2020', 106.4],
                ['1/6/2020', 129.2],
                ['1/7/2020', 144.0],
                ['1/8/2020', 176.0]
              ]
            }
          ]
        },
        start
      );

      /**
       * Adds a data point to the chart series.
       */
      function addData() {
        chart.series(0).points.add({ y: Math.random() * 200, x: new Date(dt) }, { shift: useShift });
        dt = dt + 24 * 3600000 * 2;
      }

      function shiftPoints_btnClick(shiftVal) {
        useShift = shiftVal;
      }

      function playPause(val) {
        if (val === true) {
          clearInterval(INTERVAL_ID);
        } else {
          start();
        }
      }

      function start() {
        INTERVAL_ID = setInterval(function() {
          if (chart) {
            addData();
            cnt++;
          }
        }, 800);
      }