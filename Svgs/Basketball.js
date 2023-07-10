import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { SvgXml } from 'react-native-svg';
const Basketball = ({ height, width, color }) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 19 19" fill=${defaultColor} xmlns="http://www.w3.org/2000/svg">
<path d="M8.80465 2.79139C8.68893 2.0294 8.45493 1.25807 8.11408 0.504395C6.34406 0.753286 4.74196 1.52459 3.46851 2.65766L7.86793 7.05711C8.72748 5.96398 9.05971 4.4709 8.80465 2.79139Z" fill=${defaultColor}/>
<path d="M7.87252 8.53003C6.82181 9.39758 5.46998 9.85083 3.95117 9.85086C3.54877 9.85086 3.13481 9.81907 2.71149 9.75482C1.97195 9.64249 1.22649 9.4318 0.494912 9.1312C0.494116 9.1816 0.493042 9.23196 0.493042 9.28256C0.493042 11.5441 1.3402 13.6074 2.73383 15.1738L8.62504 9.28256L7.87252 8.53003Z" fill=${defaultColor}/>
<path d="M7.13335 7.79029L2.73389 3.39087C1.60082 4.66432 0.829519 6.26639 0.580627 8.03641C1.33433 8.37726 2.10571 8.61133 2.86759 8.72705C4.54721 8.98214 6.04025 8.64984 7.13335 7.79029Z" fill=${defaultColor}/>
<path d="M15.852 9.83837C14.1725 9.58324 12.6794 9.91554 11.5863 10.7751L15.9857 15.1745C17.1188 13.9011 17.8901 12.299 18.139 10.529C17.3854 10.1882 16.6141 9.95412 15.852 9.83837Z" fill=${defaultColor}/>
<path d="M10.1121 10.7707L9.35972 10.0183L3.46851 15.9095C5.03483 17.3032 7.09818 18.1503 9.35972 18.1503C9.41032 18.1503 9.46068 18.1492 9.51108 18.1484C9.21051 17.4168 8.99979 16.6714 8.88746 15.9318C8.58059 13.9108 9.01468 12.0997 10.1121 10.7707Z" fill=${defaultColor}/>
<path d="M8.60736 7.79591L9.35972 8.54826L15.2509 2.65705C13.6846 1.26338 11.6213 0.41626 9.35972 0.41626C9.30911 0.41626 9.25875 0.417333 9.20836 0.418165C9.50893 1.1497 9.71965 1.8951 9.83197 2.63474C10.1388 4.65577 9.70476 6.46687 8.60736 7.79591Z" fill=${defaultColor}/>
<path d="M9.91457 15.7752C10.0303 16.5371 10.2644 17.3085 10.6052 18.0622C12.3752 17.8133 13.9773 17.042 15.2507 15.909L10.8513 11.5095C9.99174 12.6027 9.65952 14.0957 9.91457 15.7752Z" fill=${defaultColor}/>
<path d="M10.8471 10.0345C12.1761 8.93704 13.9872 8.50299 16.0082 8.80986C16.7479 8.92218 17.4933 9.13294 18.2248 9.43348C18.2257 9.38308 18.2267 9.33272 18.2267 9.28208C18.2267 7.02055 17.3796 4.9572 15.9859 3.39087L10.0947 9.28212L10.8471 10.0345Z" fill=${defaultColor}/>
</svg>`}
    />
  );
};

export default Basketball;
