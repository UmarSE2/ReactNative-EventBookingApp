import React from 'react';
import {SvgXml} from 'react-native-svg';

const SignOut = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.62503 7.90625V6.10938C8.62503 5.63281 8.81434 5.17577 9.15132 4.83879C9.4883 4.50181 9.94534 4.3125 10.4219 4.3125H17.6094C18.086 4.3125 18.543 4.50181 18.88 4.83879C19.217 5.17577 19.4063 5.63281 19.4063 6.10938V16.8906C19.4063 17.3672 19.217 17.8242 18.88 18.1612C18.543 18.4982 18.086 18.6875 17.6094 18.6875H10.7813C9.78896 18.6875 8.62503 17.8829 8.62503 16.8906V15.0938" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.9375 15.0938L16.5312 11.5L12.9375 7.90625M3.59372 11.5H15.8125" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default SignOut;
