import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Forward = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Grey;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15" cy="15" r="15" fill="#3D56F0"/>
            <path d="M8 14.5C8 14.0513 8.36377 13.6875 8.8125 13.6875H17.8718L13.9109 9.72666C13.5872 9.40293 13.5919 8.87665 13.9213 8.55868C14.2425 8.24855 14.7531 8.25305 15.0688 8.5688L20.9356 14.4356C20.9712 14.4712 20.9712 14.5288 20.9356 14.5644L15.07 20.43C14.7552 20.7448 14.2448 20.7448 13.93 20.43C13.6162 20.1162 13.6151 19.6078 13.9275 19.2926L17.8718 15.3125H8.8125C8.36377 15.3125 8 14.9487 8 14.5Z" fill="white"/>
            </svg>
            `}
        />

    );
};

export default Forward;
