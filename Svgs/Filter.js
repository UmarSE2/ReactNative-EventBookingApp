import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {SvgXml} from 'react-native-svg';
const Filter = ({height, width, color}) => {
  const defaultColor = color ? color : 'white';
  const defaultHeight = height ? height : 14;
  const defaultWidth = width ? width : 14;
  return (
    <SvgXml
      xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1622 0.289551C4.84137 0.289551 0.512451 4.61847 0.512451 9.93926C0.512451 15.2601 4.84137 19.589 10.1622 19.589C15.483 19.589 19.8119 15.2601 19.8119 9.93926C19.8119 4.61847 15.483 0.289551 10.1622 0.289551ZM11.6467 14.393H8.67759C8.48073 14.393 8.29192 14.3148 8.15272 14.1756C8.01351 14.0364 7.93531 13.8476 7.93531 13.6507C7.93531 13.4538 8.01351 13.265 8.15272 13.1258C8.29192 12.9866 8.48073 12.9084 8.67759 12.9084H11.6467C11.8436 12.9084 12.0324 12.9866 12.1716 13.1258C12.3108 13.265 12.389 13.4538 12.389 13.6507C12.389 13.8476 12.3108 14.0364 12.1716 14.1756C12.0324 14.3148 11.8436 14.393 11.6467 14.393ZM13.8736 11.4238H6.45074C6.25387 11.4238 6.06507 11.3456 5.92586 11.2064C5.78665 11.0672 5.70845 10.8784 5.70845 10.6815C5.70845 10.4847 5.78665 10.2959 5.92586 10.1567C6.06507 10.0175 6.25387 9.93926 6.45074 9.93926H13.8736C14.0705 9.93926 14.2593 10.0175 14.3985 10.1567C14.5377 10.2959 14.6159 10.4847 14.6159 10.6815C14.6159 10.8784 14.5377 11.0672 14.3985 11.2064C14.2593 11.3456 14.0705 11.4238 13.8736 11.4238ZM15.3582 8.45469H4.96616C4.7693 8.45469 4.58049 8.37649 4.44129 8.23728C4.30208 8.09807 4.22388 7.90927 4.22388 7.71241C4.22388 7.51554 4.30208 7.32674 4.44129 7.18753C4.58049 7.04833 4.7693 6.97012 4.96616 6.97012H15.3582C15.555 6.97012 15.7438 7.04833 15.883 7.18753C16.0222 7.32674 16.1004 7.51554 16.1004 7.71241C16.1004 7.90927 16.0222 8.09807 15.883 8.23728C15.7438 8.37649 15.555 8.45469 15.3582 8.45469Z" fill=${defaultColor}/>
</svg>
`}
    />
  );
};

export default Filter;
