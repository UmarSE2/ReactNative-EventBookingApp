import React from 'react';
import { SvgXml } from 'react-native-svg';

const ActiveAlarm = ({ height, width, color }) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 38;
  const defaultWidth = width ? width : 38;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.1" cx="18" cy="18" r="17.5" fill="white" stroke="white"/>
<path d="M23 14.6667C23 11.9053 20.7614 9.66675 18 9.66675C15.2386 9.66675 13 11.9053 13 14.6667C13 20.5001 10.5 22.1667 10.5 22.1667H25.5C25.5 22.1667 23 20.5001 23 14.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4417 25.5C19.1435 26.014 18.5942 26.3304 18 26.3304C17.4058 26.3304 16.8565 26.014 16.5583 25.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="23.5" cy="11.5" r="3.5" fill="#02E9FE" stroke="#524CE0" stroke-width="2"/>
</svg>
`}
    />
  );
};

export default ActiveAlarm;
