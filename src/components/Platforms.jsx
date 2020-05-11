
import React from "react";

export default ({ios, android, web}) => {
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
            {web && (
                <div className="platform-item platform-web">
                    Web
                </div>
            )}

        </div>
    );
};