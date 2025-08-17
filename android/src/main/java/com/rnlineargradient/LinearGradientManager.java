package com.rnlineargradient;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.viewmanagers.RNLinearGradientManagerDelegate;
import com.facebook.react.viewmanagers.RNLinearGradientManagerInterface;

public class LinearGradientManager extends SimpleViewManager<LinearGradientView> implements RNLinearGradientManagerInterface<LinearGradientView> {
    public final String REACT_CLASS = "RNLinearGradient";

    private final ViewManagerDelegate<LinearGradientView> delegate;

    public LinearGradientManager() {
        delegate = new RNLinearGradientManagerDelegate<>(this);
    }

    @Nullable
    @Override
    public ViewManagerDelegate<LinearGradientView> getDelegate() {
        return delegate;
    }

    @NonNull
    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @NonNull
    @Override
    protected LinearGradientView createViewInstance(@NonNull ThemedReactContext context) {
        return new LinearGradientView(context);
    }

    @Override
    @ReactProp(name = "startPoint")
    public void setStartPoint(LinearGradientView view, @Nullable ReadableMap value) {
        view.setStartPoint(value);
    }

    @Override
    @ReactProp(name = "endPoint")
    public void setEndPoint(LinearGradientView view, @Nullable ReadableMap value) {
        view.setEndPoint(value);
    }

    @Override
    @ReactProp(name = "colors")
    public void setColors(LinearGradientView view, @Nullable ReadableArray value) {
        view.setColors(value);
    }

    @Override
    @ReactProp(name = "locations")
    public void setLocations(LinearGradientView view, @Nullable ReadableArray value) {
        if (value != null) {
            view.setLocations(value);
        }
    }

    @Override
    @ReactProp(name = "useAngle")
    public void setUseAngle(LinearGradientView view, boolean value) {
        view.setUseAngle(value);
    }

    @Override
    @ReactProp(name = "angleCenter")
    public void setAngleCenter(LinearGradientView view, @Nullable ReadableMap value) {
        view.setAngleCenter(value);
    }

    @Override
    @ReactProp(name = "angle", defaultFloat = 45.0f)
    public void setAngle(LinearGradientView view, float value) {
        view.setAngle(value);
    }

    @Override
    @ReactProp(name = "borderRadii")
    public void setBorderRadii(LinearGradientView view, @Nullable ReadableArray value) {
        view.setBorderRadii(value);
    }
}
