import React from "react";

/**
 * This component will open the link in a blank page.
 * Mostly used for external links which make doc lose focus
 */
export default (props) => {
    return (
        <a href={ props.link } target="_blank">{ props.children }</a>
    );
}