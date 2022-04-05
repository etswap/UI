import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const DownArrow: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path d="M787.2 380.8c-9.6-9.6-22.4-12.8-35.2-12.8l-480 3.2c-12.8 0-25.6 3.2-35.2 12.8-19.2 19.2-19.2 48 0 67.2l240 240c0 0 0 0 0 0 0 0 0 0 0 0 3.2 3.2 9.6 6.4 12.8 9.6 0 0 3.2 3.2 3.2 3.2 16 6.4 38.4 3.2 51.2-9.6l240-243.2C806.4 428.8 803.2 400 787.2 380.8z" fill='#BCC1C3' />
    </Svg>
  );
}

export default DownArrow;
