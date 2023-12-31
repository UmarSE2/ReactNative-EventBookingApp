import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Mail = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Grey;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.8287 8.30591L11.9187 11.454C11.1788 12.0341 10.1415 12.0341 9.40156 11.454L5.45801 8.30591" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.3138 3.20825H14.9561C16.2022 3.22223 17.3882 3.74902 18.2379 4.66594C19.0877 5.58286 19.5269 6.80986 19.4534 8.06119V14.0451C19.5269 15.2964 19.0877 16.5234 18.2379 17.4403C17.3882 18.3573 16.2022 18.884 14.9561 18.898H6.3138C3.63722 18.898 1.83325 16.7205 1.83325 14.0451V8.06119C1.83325 5.38575 3.63722 3.20825 6.3138 3.20825Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`}
        />
    );
};

export default Mail;
