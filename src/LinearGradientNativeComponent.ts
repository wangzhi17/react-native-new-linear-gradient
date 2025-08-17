import type {HostComponent, ViewProps} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

import type { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import type { Float } from "react-native/Libraries/Types/CodegenTypes";
import type {PointValue} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

export interface LinearGradientProps extends ViewProps {
  colors: ColorValue[];
  start?: PointValue;
  end?: PointValue;
  locations?: Float[];
  useAngle?: boolean;
  angleCenter?: PointValue;
  angle?: Float;
}

export interface Props extends ViewProps {
  startPoint?: PointValue,
  endPoint?: PointValue,
  colors: ColorValue[],
  locations?: Float[],
  useAngle?: boolean,
  angleCenter?: PointValue,
  angle?: Float,
  borderRadii?: Float[],
}

export default codegenNativeComponent<Props>("RNLinearGradient") as HostComponent<Props>;
