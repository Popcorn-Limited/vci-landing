import React from "react";

interface Props {
    color: string;
}
const LeftArrowIcon: React.FC<Props> = ({ color }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
            <path
                d="M0.469669 5.63471C0.176775 5.9276 0.176775 6.40248 0.469669 6.69537L5.24264 11.4683C5.53553 11.7612 6.01041 11.7612 6.3033 11.4683C6.59619 11.1754 6.59619 10.7006 6.3033 10.4077L2.06066 6.16504L6.3033 1.9224C6.59619 1.62951 6.59619 1.15463 6.3033 0.861738C6.01041 0.568845 5.53553 0.568845 5.24264 0.861738L0.469669 5.63471ZM17 5.41504L1 5.41504V6.91504L17 6.91504V5.41504Z"
                fill={`${color}`}
            />
        </svg>
    );
};

export default LeftArrowIcon;
