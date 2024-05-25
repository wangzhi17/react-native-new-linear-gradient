#import "RNLinearGradientManager.h"
#import "RNLinearGradient.h"
#import <React/RCTBridge.h>

@implementation RNLinearGradientManager

RCT_EXPORT_MODULE();

@synthesize bridge = _bridge;

- (UIView *)view
{
  return [[RNLinearGradient alloc] init];
}

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_CUSTOM_VIEW_PROPERTY(colors,NSArray,RNLinearGradient)
{
    NSLog(@"颜色：%@",json);
    view.colors=[RCTConvert NSArray:json];
}

RCT_CUSTOM_VIEW_PROPERTY(startPoint,CGPoint,RNLinearGradient)
{
    NSLog(@"开始：%@",json);
    view.startPoint=[RCTConvert CGPoint:json];
}

RCT_CUSTOM_VIEW_PROPERTY(endPoint,CGPoint,RNLinearGradient)
{
    NSLog(@"结束：%@",json);
    view.endPoint=[RCTConvert CGPoint:json];
}

RCT_CUSTOM_VIEW_PROPERTY(locations,NSArray,RNLinearGradient)
{
    NSLog(@"locations：%@",json);
    view.locations=[RCTConvert NSArray:json];
}

RCT_CUSTOM_VIEW_PROPERTY(useAngle,BOOL,RNLinearGradient)
{
    view.useAngle=[RCTConvert BOOL:json];
}

RCT_CUSTOM_VIEW_PROPERTY(angleCenter,CGPoint,RNLinearGradient)
{
    view.angleCenter=[RCTConvert CGPoint:json];
}

RCT_CUSTOM_VIEW_PROPERTY(angle,CGFloat,RNLinearGradient)
{
    view.angle=[RCTConvert CGFloat:json];
}

@end
