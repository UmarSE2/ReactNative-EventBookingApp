import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const MenuBar = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 1.2C0 0.537258 0.537258 0 1.2 0H22.8C23.4627 0 24 0.537258 24 1.2C24 1.86274 23.4627 2.4 22.8 2.4H1.2C0.537258 2.4 0 1.86274 0 1.2ZM0 9.59992C0 8.93718 0.537259 8.39992 1.2 8.39992H16.8C17.4627 8.39992 18 8.93718 18 9.59992C18 10.2627 17.4627 10.7999 16.8 10.7999H1.2C0.537259 10.7999 0 10.2627 0 9.59992ZM1.2 16.8C0.537258 16.8 0 17.3373 0 18C0 18.6628 0.537258 19.2 1.2 19.2H22.8C23.4627 19.2 24 18.6628 24 18C24 17.3373 23.4627 16.8 22.8 16.8H1.2Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default MenuBar;
