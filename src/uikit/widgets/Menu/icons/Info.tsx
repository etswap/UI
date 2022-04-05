import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 18 18" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <path d="M9.118,18.236 C4.061,18.236 -0.000,14.174 -0.000,9.118 C-0.000,4.061 4.061,-0.000 9.118,-0.000 C14.174,-0.000 18.236,4.061 18.236,9.118 C18.236,14.174 14.174,18.236 9.118,18.236 ZM9.118,1.657 C4.973,1.657 1.657,4.973 1.657,9.118 C1.657,13.262 4.973,16.578 9.118,16.578 C13.262,16.578 16.578,13.262 16.578,9.118 C16.578,4.973 13.262,1.657 9.118,1.657 ZM9.118,13.262 C8.620,13.262 8.289,12.931 8.289,12.433 L8.289,9.118 C8.289,8.620 8.620,8.289 9.118,8.289 C9.615,8.289 9.947,8.620 9.947,9.118 L9.947,12.433 C9.947,12.931 9.615,13.262 9.118,13.262 ZM9.615,6.465 C9.532,6.465 9.532,6.548 9.449,6.548 C9.366,6.548 9.366,6.548 9.284,6.631 L9.118,6.631 C9.035,6.631 8.869,6.631 8.786,6.548 C8.703,6.465 8.620,6.465 8.538,6.382 C8.372,6.217 8.289,6.051 8.289,5.802 L8.289,5.636 C8.289,5.553 8.289,5.553 8.372,5.471 C8.372,5.388 8.455,5.388 8.455,5.305 C8.455,5.222 8.538,5.222 8.538,5.222 C8.620,5.139 8.703,5.056 8.786,5.056 C9.118,4.890 9.449,4.973 9.698,5.222 L9.781,5.305 C9.781,5.388 9.864,5.388 9.864,5.471 C9.864,5.553 9.864,5.553 9.947,5.636 L9.947,5.802 C9.947,6.051 9.864,6.217 9.698,6.382 C9.615,6.382 9.615,6.465 9.615,6.465 Z" />
    </Svg>
  );
};

export default Icon;
