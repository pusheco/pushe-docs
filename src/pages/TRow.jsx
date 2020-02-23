import React from "react";

export default ({display, docLink, img, github, desc, version}) => {
    return (
        <tr>
            <td align="center">
                <a href={docLink}><img src={img} height="50" /></a>
            </td>
            
            <td align="center">
                <a href={docLink}><strong>لینک مستندات</strong></a>
            </td>
            
            <td align="center">
                <a href={github}><strong>گیت‌هاب</strong></a>
            </td>

            <td>{desc}</td>
        </tr>
    );
};