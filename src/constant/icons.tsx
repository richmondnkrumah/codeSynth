import { useThemeStore } from "@/store/Theme";
import { ReactElement } from "react";

interface icon {
  name: string;
  icon: ReactElement;
}

export const ICONS: icon[] = [
  {
    name: "css",
    icon: (
      <svg
      className="w-5 h-5"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#5D5DEA"
        fillRule="evenodd"
        d="M6.884 1.762a.75.75 0 01.604.872L7.058 5h2.975l.479-2.634a.75.75 0 111.476.268L11.558 5h1.192a.75.75 0 010 1.5h-1.465l-.546 3h2.011a.75.75 0 010 1.5h-2.283l-.48 2.634a.75.75 0 11-1.475-.268L8.942 11H5.967l-.48 2.634a.75.75 0 11-1.475-.268L4.442 11H3.25a.75.75 0 010-1.5h1.465l.545-3H3.25a.75.75 0 010-1.5h2.283l.479-2.634a.75.75 0 01.872-.604zM9.214 9.5l.546-3H6.785l-.546 3h2.976z"
        clipRule="evenodd"
      />
    </g>
  </svg>
    ),
  }
  ,
  {
    name: "js",
    icon: (
      <svg
      className="w-5 h-5"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <title>file_type_js</title>
          <path
            d="M18.774,19.7a3.727,3.727,0,0,0,3.376,2.078c1.418,0,2.324-.709,2.324-1.688,0-1.173-.931-1.589-2.491-2.272l-.856-.367c-2.469-1.052-4.11-2.37-4.11-5.156,0-2.567,1.956-4.52,5.012-4.52A5.058,5.058,0,0,1,26.9,10.52l-2.665,1.711a2.327,2.327,0,0,0-2.2-1.467,1.489,1.489,0,0,0-1.638,1.467c0,1.027.636,1.442,2.1,2.078l.856.366c2.908,1.247,4.549,2.518,4.549,5.376,0,3.081-2.42,4.769-5.671,4.769a6.575,6.575,0,0,1-6.236-3.5ZM6.686,20c.538.954,1.027,1.76,2.2,1.76,1.124,0,1.834-.44,1.834-2.15V7.975h3.422V19.658c0,3.543-2.078,5.156-5.11,5.156A5.312,5.312,0,0,1,3.9,21.688Z"
            fill="#f5de19"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    name: "html",
    icon: (
      <svg
      className=" w-5 h-5"
      height="200px"
      width="200px"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 502.664 502.664"
      xmlSpace="preserve"
      fill="#00000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <g>
          <g>
            <path
              style={{
                fill: "#FF4F00",
              }}
              d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431 C153.821,303.954,153.821,358.226,153.821,358.226z"
            />
            <path
              style={{
                fill: "#FF4F00",
              }}
              d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183 L348.843,358.226z"
            />
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </g>
      </g>
    </svg>
    ),
  },
  {
    name: "ts",
    icon: (
      <svg
      className="w-5 h-5"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth={0} />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <title>{"file_type_typescript"}</title>
      <path
        d="M23.827,8.243A4.424,4.424,0,0,1,26.05,9.524a5.853,5.853,0,0,1,.852,1.143c.011.045-1.534,1.083-2.471,1.662-.034.023-.169-.124-.322-.35a2.014,2.014,0,0,0-1.67-1c-1.077-.074-1.771.49-1.766,1.433a1.3,1.3,0,0,0,.153.666c.237.49.677.784,2.059,1.383,2.544,1.095,3.636,1.817,4.31,2.843a5.158,5.158,0,0,1,.416,4.333,4.764,4.764,0,0,1-3.932,2.815,10.9,10.9,0,0,1-2.708-.028,6.531,6.531,0,0,1-3.616-1.884,6.278,6.278,0,0,1-.926-1.371,2.655,2.655,0,0,1,.327-.208c.158-.09.756-.434,1.32-.761L19.1,19.6l.214.312a4.771,4.771,0,0,0,1.35,1.292,3.3,3.3,0,0,0,3.458-.175,1.545,1.545,0,0,0,.2-1.974c-.276-.395-.84-.727-2.443-1.422a8.8,8.8,0,0,1-3.349-2.055,4.687,4.687,0,0,1-.976-1.777,7.116,7.116,0,0,1-.062-2.268,4.332,4.332,0,0,1,3.644-3.374A9,9,0,0,1,23.827,8.243ZM15.484,9.726l.011,1.454h-4.63V24.328H7.6V11.183H2.97V9.755A13.986,13.986,0,0,1,3.01,8.289c.017-.023,2.832-.034,6.245-.028l6.211.017Z"
        style={{
          fill: "#007acc",
        }}
      />
    </g>
  </svg>
    ),
  },

];

