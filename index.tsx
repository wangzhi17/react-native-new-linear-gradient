import {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';

import NativeLinearGradient, {type LinearGradientProps} from './src';

/**
 * Checks if value is a valid number. Otherwise, defaults to defaultValue.
 *
 * @param {number} defaultValue
 */
const validNumber = (defaultValue) => (value) => {
  return typeof value === 'number' ? value : defaultValue;
};

export default class LinearGradient extends Component<LinearGradientProps> {

  static defaultProps = {
    start: {x: 0.5, y: 0.0},
    end: {x: 0.5, y: 1.0},
  };
  props: LinearGradientProps

  render() {
    const {
      children,
      colors,
      end,
      locations,
      useAngle,
      angleCenter,
      angle,
      start,
      style,
      ...otherProps
    } = this.props;


    if (Platform.OS === 'ios') {
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
    // inherit container borderRadius until this issue is resolved:
    // https://github.com/facebook/react-native/issues/3198
    const flatStyle = StyleSheet.flatten(style) || {};
    const borderRadius = flatStyle.borderRadius || 0;
    const validRadius = validNumber(borderRadius);

    // this is the format taken by:
    // http://developer.android.com/reference/android/graphics/Path.html#addRoundRect(android.graphics.RectF, float[], android.graphics.Path.Direction)
    const borderRadiiPerCorner = [
      validRadius(flatStyle.borderTopLeftRadius),
      validRadius(flatStyle.borderTopLeftRadius),
      validRadius(flatStyle.borderTopRightRadius),
      validRadius(flatStyle.borderTopRightRadius),
      validRadius(flatStyle.borderBottomRightRadius),
      validRadius(flatStyle.borderBottomRightRadius),
      validRadius(flatStyle.borderBottomLeftRadius),
      validRadius(flatStyle.borderBottomLeftRadius)
    ];
    return (
      <View {...otherProps} style={style}>
        <NativeLinearGradient
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          colors={colors}
          startPoint={start}
          endPoint={end}
          locations={locations ? locations.slice(0, colors.length) : null}
          useAngle={useAngle}
          angleCenter={angleCenter}
          angle={angle}
          borderRadii={borderRadiiPerCorner}
        />
        {children}
      </View>
    );
  }
}
