import {FC} from "react";
import {Box, SxProps} from "@mui/material";
import {Theme} from "@mui/material/styles";

export enum LOCATION {
   left = 'start',
   right = 'end',
}

interface SplitterProps {
   position: LOCATION;
   color: string;
   margin?: string;
   svgStyles?: SxProps<Theme>;
}

const Splitter: FC<SplitterProps> = ({position, color, margin, svgStyles}) => {
   return (
      <Box
         sx={{
            color: color,
            display: 'flex',
            justifyContent: position,
            margin: margin,
         }}
      >
         <Box
            component={'svg'}
            xmlns="http://www.w3.org/2000/svg"
            width="565"
            height="28"
            viewBox="0 0 565 28"
            fill="none"
            sx={{
               width: `565px`,
               height: `28px`,
               ...svgStyles
            }}
         >
            <path
               d="M391.81 27.4997C381.635 27.4997 374.17 21.242 367.327 15.5144C363.989 12.7216 360.839 10.085 357.435 8.10163C343.488 -0.016403 334.669 6.30762 323.506 14.3026C314.764 20.5651 304.848 27.6607 291.565 26.0939C281.703 24.9294 274.004 19.4953 266.558 14.2363C254.654 5.82479 245.25 -0.825836 230.002 10.9465C228.183 12.3524 226.508 13.9428 224.731 15.628C220.387 19.7556 215.893 24.0253 208.682 26.127C198.38 29.1281 187.555 26.6193 178.217 19.0456C176.614 17.7486 175.108 16.3664 173.596 14.9747C168.909 10.6672 164.487 6.59637 157.144 5.1479C149.234 3.58583 142.161 5.50292 134.221 11.3725C132.564 12.5938 130.92 13.9949 129.179 15.4718C122.871 20.8302 115.732 26.8986 104.642 27.3388C92.5086 27.8311 84.5564 20.887 78.1224 15.3203C76.8152 14.1937 75.5561 13.0955 74.303 12.1015C63.5014 3.51956 50.9527 2.76219 39.88 10.0424C37.7895 11.4104 35.681 13.0766 33.452 14.8375C25.7228 20.9343 16.1079 28.5174 2.22182 26.4962C0.74586 26.2785 -0.230082 25.1661 0.0470371 24.0064C0.318132 22.8466 1.7459 22.0751 3.21584 22.2975C14.2705 23.9117 22.066 17.7628 29.6024 11.8222C31.9278 9.99033 34.1207 8.26257 36.3919 6.76677C49.5068 -1.84356 65.5195 -0.953638 78.1706 9.10042C79.4719 10.1323 80.7912 11.2731 82.1467 12.447C88.3939 17.8575 94.9062 23.4667 104.364 23.0691C113.244 22.7188 119.311 17.5593 125.185 12.5654C126.992 11.027 128.703 9.57851 130.498 8.25311C136.36 3.92665 145.631 -1.54061 158.469 0.996571C167.493 2.78112 172.699 7.56202 177.729 12.1914C179.163 13.5121 180.596 14.8327 182.121 16.0635C187.597 20.5083 196.326 25.1614 206.796 22.1129C212.64 20.4089 216.477 16.7593 220.544 12.8967C222.333 11.2021 224.176 9.44596 226.195 7.88862C245.075 -6.69071 258.419 2.73379 270.19 11.0459C277.034 15.8836 284.119 20.8822 292.366 21.8573C303.095 23.1259 311.228 17.2989 319.837 11.1311C330.753 3.31128 343.127 -5.54993 360.658 4.65087C364.459 6.86144 367.923 9.76785 371.279 12.5748C380.9 20.6313 389.201 27.5849 404.135 19.6184C407.575 17.7818 410.955 15.1215 414.527 12.305C424.576 4.38107 437.07 -5.48366 455.143 3.68996C459.608 5.95733 463.656 9.28502 467.572 12.5038C477.626 20.7733 486.313 27.921 501.013 18.9225C503.935 17.138 506.471 14.8895 509.164 12.5038C514.562 7.72295 520.14 2.78112 529.351 1.17645C545.689 -1.67315 558.774 8.88741 563.636 13.5642C564.582 14.4777 564.413 15.8221 563.25 16.57C562.088 17.3179 560.377 17.1853 559.425 16.267C555.202 12.2056 543.954 3.01307 530.526 5.34198C523.038 6.64844 518.273 10.8708 513.23 15.3392C510.495 17.7628 507.67 20.2621 504.356 22.2928C485.783 33.6581 473.506 23.5661 463.644 15.4528C459.776 12.2719 456.125 9.27082 452.198 7.27326C437.83 -0.0164035 428.389 7.42473 418.383 15.3156C414.786 18.151 411.063 21.081 407.19 23.1496C401.4 26.2359 396.334 27.4808 391.798 27.4808L391.81 27.4997Z"
               fill="currentColor"/>
         </Box>
      </Box>
   );
};

export default Splitter;