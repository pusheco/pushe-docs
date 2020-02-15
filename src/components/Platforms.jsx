
import React from "react";

export default ({ios, android}) => {
    return (
        <div className="platform-items-wrapper">
            {ios && (
                <div className="platform-item platform-ios">
                    iOS
                </div>
            )}
            {android && (
                <div className="platform-item platform-android">
                    Android
                </div>
            )}
        </div>
    );
};