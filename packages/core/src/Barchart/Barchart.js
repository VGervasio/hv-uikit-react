import React, { useMemo, useEffect, useState, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Chart from "../Chart";
import { applyLayoutDefaults, applyDataDefaults } from "./barchartPlotlyOverrides";
import styles from "./styles";

const MARGIN = 50;
const MAX_BAR_WIDTH = 90;

/**
 * A Bar chart is a chart or graph that presents categorical data with rectangular bars.
 *
 * Our implementation uses as base Plotly. If you have a specific case
 * that we don't cover directly, the Plotly [documentation](https://plotly.com/javascript/) is a good starting point.
 */
const Barchart = ({
  id,
  classes,
  title,
  subtitle,
  data,
  layout,
  config,
  tooltipType = "multiple",
  stack = false,
  horizontal = false,
  xAxisTitle,
  yAxisTitle,
  ...others
}) => {
  /* Values derived from props */

  const dataWithDefaults = useMemo(() => applyDataDefaults(data, horizontal), [data, horizontal]);
  const chartLayout = useMemo(() => applyLayoutDefaults(layout, stack), [layout, stack]);

  /* State */

  const [chartData, setChartData] = useState(dataWithDefaults);

  /* Effects */

  const firstRender = useRef(true);
  useEffect(() => {
    // only setChartData when prop value changes
    // not needed on first render because the
    // initial state is already properly set
    if (!firstRender.current) {
      setChartData(dataWithDefaults);
    }

    firstRender.current = false;
  }, [dataWithDefaults]);

  /**
   * Used to force the max width of each bar with 90px.
   *
   * (this is effectively more an effect than a callback)
   */
  const recalculateBarWidth = useCallback((ref) => {
    // use the data and layout info directly from the plotly ref
    // as it's always the most uptodate version.
    const plotData = ref.current.props.data;
    const plotLayout = ref.current.props.layout;

    if (plotData.length > 0) {
      const { barmode, bargap, bargroupgap } = plotLayout;

      const isStack = barmode === "stack";
      const numberOfBarsByGroup = isStack ? 1 : plotData.length;
      const numberOfGroup = plotData[0].x.length;

      const { width } = ref.current.el.getBoundingClientRect();
      const plotWidth = width - MARGIN;
      const groupWidth = plotWidth / numberOfGroup;
      const colWidth = groupWidth * (1 - bargap) - groupWidth * (1 - bargap) * bargroupgap;

      const greaterThan90 = colWidth / numberOfBarsByGroup > MAX_BAR_WIDTH;
      const isAlreadyGreaterThan90 = plotData[0].width !== undefined;

      if (greaterThan90 && !isAlreadyGreaterThan90) {
        const newWidth = (MAX_BAR_WIDTH / plotWidth) * numberOfGroup;

        const newData = plotData.map((subData) => {
          return { ...subData, width: newWidth };
        });

        setChartData(newData);
      }

      if (!greaterThan90 && isAlreadyGreaterThan90) {
        const newData = plotData.map((subData) => {
          return { ...subData, width: undefined };
        });

        setChartData(newData);
      }
    }
  }, []);

  return (
    <Chart
      id={id}
      classes={classes}
      title={title}
      subtitle={subtitle}
      xAxisTitle={xAxisTitle}
      yAxisTitle={yAxisTitle}
      data={chartData}
      layout={chartLayout}
      config={config}
      tooltipType={tooltipType}
      afterPlot={recalculateBarWidth}
      {...others}
    />
  );
};
Barchart.propTypes = {
  /**
   * An Id passed on to the component
   */
  id: PropTypes.string,
  /**
   * A Jss Object used to override or extend the styles applied.
   */
  classes: PropTypes.instanceOf(Object),
  /**
   * Title of the chart.
   */
  title: PropTypes.string,
  /**
   * Subtitle of the chart.
   */
  subtitle: PropTypes.string,
  /**
   * Plotly data object (see https://plot.ly/javascript/reference/).
   */
  data: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired,
  /**
   * Plotly layout object (see https://plot.ly/javascript/reference/#layout).
   */
  layout: PropTypes.instanceOf(Object),
  /**
   * Plotly config object (see https://plot.ly/javascript/configuration-options/).
   */
  config: PropTypes.instanceOf(Object),
  /**
   * Defines if should use a single or multiline tooltip.
   */
  tooltipType: PropTypes.oneOf(["single", "multiple"]),
  /**
   * Sets is the chart is stack.
   */
  stack: PropTypes.bool,
  /**
   * Sets is the chart is horizontal.
   */
  horizontal: PropTypes.bool,
  /**
   * Defines the title of the X axis.
   */
  xAxisTitle: PropTypes.string,
  /**
   * Defines the title of the Y axis.
   */
  yAxisTitle: PropTypes.string,
};

export default withStyles(styles, { name: "HvBarchart" })(Barchart);
