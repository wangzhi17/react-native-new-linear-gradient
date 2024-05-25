/**
 * @providesModule LinearGradient
 * @flow
 */
import React, { Component } from 'react';

import NativeLinearGradient from './src/LinearGradientNativeComponent';

export default class LinearGradient extends Component {


  static defaultProps = {
    start: { x: 0.5, y: 0.0 },
    end: { x: 0.5, y: 1.0 },
  };

  render() {
    const {
      start,
      end,
      colors,
      locations,
      useAngle,
      angleCenter,
      angle,
      ...otherProps
    } = this.props;

    return (
      <NativeLinearGradient
        {...otherProps}
        startPoint={start}
        endPoint={end}
        colors={colors}
        locations={locations ? locations.slice(0, colors.length) : null}
        useAngle={useAngle}
        angleCenter={angleCenter}
        angle={angle}
      />
    );
  }
}
