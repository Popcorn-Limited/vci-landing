import React from "react";

interface Props {
  color: string;
}
const RightArrowIcon: React.FC<Props> = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
        <path
            d="M16.5547 6.69537C16.8476 6.40248 16.8476 5.9276 16.5547 5.63471L11.7818 0.861738C11.4889 0.568845 11.014 0.568845 10.7211 0.861738C10.4282 1.15463 10.4282 1.62951 10.7211 1.9224L14.9638 6.16504L10.7211 10.4077C10.4282 10.7006 10.4282 11.1754 10.7211 11.4683C11.014 11.7612 11.4889 11.7612 11.7818 11.4683L16.5547 6.69537ZM0.0244141 6.91504H16.0244V5.41504H0.0244141V6.91504Z"
            fill={`${color}`}
        />
    </svg>
  );
};

export default RightArrowIcon;
