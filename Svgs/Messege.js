import React from 'react';
import {SvgXml} from 'react-native-svg';

const Messege = ({height, width, color}) => {
  const defaultColor = color ? color : '#5669FF';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.25 8.54169C17.2532 9.75157 16.9705 10.9451 16.425 12.025C15.7782 13.3191 14.7839 14.4076 13.5535 15.1685C12.3231 15.9295 10.9051 16.3328 9.45833 16.3334C8.24845 16.3365 7.05494 16.0538 5.975 15.5084L0.75 17.25L2.49167 12.025C1.94619 10.9451 1.66351 9.75157 1.66667 8.54169C1.66723 7.09497 2.07056 5.67697 2.83149 4.44653C3.59242 3.21609 4.6809 2.2218 5.975 1.57503C7.05494 1.02955 8.24845 0.746872 9.45833 0.750026H9.91667C11.8273 0.855435 13.632 1.66189 14.985 3.01498C16.3381 4.36807 17.1446 6.17271 17.25 8.08336V8.54169Z" stroke=${defaultColor} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Messege;
