import React from 'react';
import {SvgXml} from 'react-native-svg';

const Question = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21.0834C16.7927 21.0834 21.0834 16.7928 21.0834 11.5001C21.0834 6.20735 16.7927 1.91675 11.5 1.91675C6.20729 1.91675 1.91669 6.20735 1.91669 11.5001C1.91669 16.7928 6.20729 21.0834 11.5 21.0834Z" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.71127 8.62506C8.93658 7.98457 9.38129 7.44449 9.96665 7.10048C10.552 6.75646 11.2402 6.63071 11.9094 6.74549C12.5786 6.86027 13.1856 7.20818 13.6228 7.7276C14.0601 8.24703 14.2994 8.90443 14.2984 9.58339C14.2984 11.5001 11.4234 12.4584 11.4234 12.4584V14.0897" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 16.2917H11.5104" stroke="#767676" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export default Question;
