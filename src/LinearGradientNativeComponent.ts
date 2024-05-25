import type { ViewProps } from "ViewPropTypes";
import type { HostComponent } from "react-native";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

import type { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import type { Float } from "react-native/Libraries/Types/CodegenTypes";


type PointValue = {
  x: Float
  y: Float
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
