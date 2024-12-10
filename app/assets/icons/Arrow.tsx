import { svgProps } from "@/app/constants/types";

const ArrowIcon = ({color = "#EDEDED", size = 30}: svgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 14 14"
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M6.646.146a.5.5 0 0 1 .708 0l3.5 3.5a.5.5 0 0 1-.354.854H8V13a1 1 0 1 1-2 0V4.5H3.5a.5.5 0 0 1-.354-.854l3.5-3.5Z"
      clipRule="evenodd"
    />
  </svg>
)

export default ArrowIcon;