import React from "react";

/**
 * This component will open the link in a blank page.
 * Mostly used for external links which make doc lose focus
 */
const style = {
    paddingRight: '1px',
    paddingLeft: '1px',
};

export default (props) => {
    return (
        <a style={style} href={ props.link || props.href } target="_blank">{ props.children }</a>
    );
}