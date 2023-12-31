import React from 'react';
import { SvgXml } from 'react-native-svg';
import { Colors } from '../Assets/Theme';

const Profile = ({ height, width, color }) => {
    const defaultColor = color ? color : Colors.Grey;
    const defaultHeight = height ? height : 18;
    const defaultWidth = width ? width : 18;
    return (
        <SvgXml
            xml={`<svg width=${defaultWidth} height=${defaultHeight} viewBox="0 0 22 22" fill=${defaultColor} xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="10.6142" cy="6.67149" rx="4.37986" ry="4.37986" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.66676 17.1428C3.66559 16.8349 3.73445 16.5308 3.86814 16.2535C4.28766 15.4144 5.47073 14.9697 6.45242 14.7683C7.16042 14.6172 7.87819 14.5163 8.6004 14.4663C9.93752 14.3488 11.2824 14.3488 12.6195 14.4663C13.3416 14.5169 14.0594 14.6178 14.7674 14.7683C15.7491 14.9697 16.9322 15.3724 17.3517 16.2535C17.6206 16.8188 17.6206 17.4752 17.3517 18.0406C16.9322 18.9216 15.7491 19.3244 14.7674 19.5174C14.0603 19.6747 13.3423 19.7785 12.6195 19.8278C11.5312 19.9201 10.4378 19.9369 9.34716 19.8782C9.09544 19.8782 8.85212 19.8782 8.6004 19.8278C7.88033 19.7791 7.16504 19.6753 6.46081 19.5174C5.47073 19.3244 4.29605 18.9216 3.86814 18.0406C3.73513 17.7601 3.66634 17.4534 3.66676 17.1428Z" stroke="#807A7A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            `}
        />
    );
};

export default Profile;
