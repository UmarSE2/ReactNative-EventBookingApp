import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Lock = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Grey;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.0548 8.66038V6.6923C15.0548 4.38872 13.1866 2.52055 10.883 2.52055C8.57943 2.51047 6.70393 4.36947 6.69385 6.67397V6.6923V8.66038" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3762 19.4788H7.372C5.4525 19.4788 3.896 17.9232 3.896 16.0028V12.0712C3.896 10.1508 5.4525 8.59521 7.372 8.59521H14.3762C16.2957 8.59521 17.8522 10.1508 17.8522 12.0712V16.0028C17.8522 17.9232 16.2957 19.4788 14.3762 19.4788Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.8743 13.019V15.055" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`}
        />

    );
};

export default Lock;
