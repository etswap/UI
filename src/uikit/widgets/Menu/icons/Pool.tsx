import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" {...props} xmlns="http://www.w3.org/2000/svg">
      <circle cx="7.59082" cy="7.45459" r="7" />
      <path d="M10.8862 7.39154C10.5841 7.39154 10.3183 7.1716 10.2709 6.86396C10.0844 5.65288 9.14755 4.69933 7.94064 4.49191C7.60238 4.43345 7.37408 4.11188 7.43255 3.77223C7.49101 3.43396 7.81118 3.20427 8.15224 3.26413C9.88811 3.56342 11.2342 4.93458 11.5015 6.67464C11.5544 7.0143 11.3205 7.33308 10.9809 7.38458C10.9489 7.38876 10.9168 7.39154 10.8862 7.39154ZM6.93837 11.3617C6.90775 11.3617 6.87712 11.3589 6.8465 11.3547C5.07303 11.0916 3.65454 9.66893 3.39701 7.89407C3.34829 7.55441 3.58355 7.23842 3.9246 7.1883C4.26565 7.14097 4.58164 7.37484 4.63036 7.71589C4.80854 8.94924 5.7955 9.93898 7.02886 10.1227C7.36851 10.1728 7.60377 10.4902 7.55366 10.8299C7.50772 11.1389 7.24184 11.3617 6.93837 11.3617Z" fill="white" />
      <path d="M7.45254 9.29167C6.35561 9.29167 5.46191 8.39937 5.46191 7.30105C5.46191 6.20273 6.35422 5.31042 7.45254 5.31042C8.55086 5.31042 9.44316 6.20273 9.44316 7.30105C9.44316 8.39937 8.54947 9.29167 7.45254 9.29167ZM7.45254 6.55631C7.04189 6.55631 6.70779 6.8904 6.70779 7.30105C6.70779 7.7117 7.04189 8.04579 7.45254 8.04579C7.86319 8.04579 8.19728 7.7117 8.19728 7.30105C8.19728 6.8904 7.86319 6.55631 7.45254 6.55631Z" fill="white" />
    </Svg>
  )
}

export default Icon
