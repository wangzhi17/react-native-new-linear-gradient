package com.rnlineargradient;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewManagerDelegate;
import com.facebook.react.viewmanagers.RNLinearGradientManagerDelegate;
import com.facebook.react.viewmanagers.RNLinearGradientManagerInterface;

public class LinearGradientManager extends SimpleViewManager<LinearGradientView> implements RNLinearGradientManagerInterface<LinearGradientView> {
    public  final String REACT_CLASS = "RNLinearGradient";

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
    public void setStartPoint(LinearGradientView view, @Nullable ReadableMap value) {
        view.setStartPoint(value);
    }

    @Override
    public void setEndPoint(LinearGradientView view, @Nullable ReadableMap value) {
        view.setEndPoint(value);
    }

    @Override
    public void setColors(LinearGradientView view, @Nullable ReadableArray value) {
        view.setColors(value);
    }

    @Override
    public void setLocations(LinearGradientView view, @Nullable ReadableArray value) {
        if (value != null) {
            view.setLocations(value);
        }
    }

    @Override
    public void setUseAngle(LinearGradientView view, boolean value) {
        view.setUseAngle(value);
    }

    @Override
    public void setAngleCenter(LinearGradientView view, @Nullable ReadableMap value) {
        view.setAngleCenter(value);
    }

    @Override
    public void setAngle(LinearGradientView view, float value) {
        view.setAngle(value);
    }

    @Override
    public void setBorderRadii(LinearGradientView view, @Nullable ReadableArray value) {
        view.setBorderRadii(value);
    }
}
