import { Platform } from "react-native";
import LinearGradientIos from "./index.ios";
import LinearGradientAndroid from "./index.android";

const LinearGradient = Platform.select({
  android: LinearGradientAndroid,
  ios: LinearGradientIos
});
export default LinearGradient;
