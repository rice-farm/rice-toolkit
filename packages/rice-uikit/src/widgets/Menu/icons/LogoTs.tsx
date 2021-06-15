import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const teslaColor = isDark ? "#FFFFFF" : "#092057";
  const safeColor = isDark ? "#979F9D" : "#1C7DFC";
  const polygonColor = isDark ? "#FFFFFF" : "#092057";
  const pathColor = isDark ? "#979F9D" : "#1C7DFC";
  const rectColor = isDark ? "#FFFFFF" : "#092057";

  return (
    <Svg viewBox="0 0 3187 493" height="26" {...props}>
      <title>teslasafe-logo-text</title>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="logo-text-02A" transform="translate(-522.000000, -425.000000)">
          <g transform="translate(522.000000, 425.000000)">
            <g id="TESLA-SAFE" transform="translate(715.000000, 99.902317)" fillRule="nonzero">
              <path
                id="TESLA"
                fill={teslaColor}
                d="M150.0625,280.601562 L150.0625,61.8242188 L233.707031,61.8242188 L233.707031,3.828125 L2.27373675e-13,3.828125 L2.27373675e-13,61.8242188 L83.453125,61.8242188 L83.453125,280.601562 L150.0625,280.601562 Z M478.007408,60.2929688 L478.007408,4.2109375 L264.780846,4.2109375 L264.780846,60.2929688 L478.007408,60.2929688 Z M478.007408,280.601562 L478.007408,224.519531 L324.691002,224.519531 L324.691002,170.542969 L397.999596,170.542969 L397.999596,114.460938 L264.780846,114.460938 L264.780846,280.601562 L478.007408,280.601562 Z M626.987473,280.601562 C641.917161,280.601562 655.826015,278.623698 668.714036,274.667969 C681.219244,270.839844 692.065598,265.22526 701.253098,257.824219 C710.312994,250.550781 717.203619,241.682292 721.924973,231.21875 C726.901536,220.755208 729.389817,208.888021 729.389817,195.617188 L729.389817,195.617188 L729.389817,194.851562 C729.389817,182.984375 727.539556,172.776042 723.839036,164.226562 C720.138515,155.677083 714.396327,148.084635 706.612473,141.449219 C699.083827,135.196615 689.832525,129.709635 678.858567,124.988281 C668.012213,120.394531 655.570806,116.247396 641.534348,112.546875 C637.833827,111.526042 634.324713,110.56901 631.007004,109.675781 C624.243983,107.889323 618.374192,106.230469 613.397629,104.699219 C605.868983,102.27474 600.126796,99.9140625 596.171067,97.6171875 C592.215338,95.1927083 589.471848,92.4492188 587.940598,89.3867188 C586.026536,86.4518229 585.069504,82.6236979 585.069504,77.9023438 L585.069504,77.9023438 L585.069504,77.1367188 C585.069504,70.5013021 587.812994,65.1419271 593.299973,61.0585938 C598.40414,56.8476562 606.251796,54.7421875 616.842942,54.7421875 C627.8169,54.7421875 638.918463,57.1028646 650.147629,61.8242188 C661.249192,66.4179688 673.945806,73.5 688.237473,83.0703125 L688.237473,83.0703125 L721.159348,35.6015625 C706.740077,23.9895833 690.917161,15.1210938 673.690598,8.99609375 C656.719244,2.99869792 638.025233,0 617.608567,0 C603.189296,0 589.982265,1.9140625 577.987473,5.7421875 C565.865077,9.953125 555.465338,15.7591146 546.788254,23.1601562 C538.111171,30.4335938 531.411952,39.1744792 526.690598,49.3828125 C522.224452,59.4635417 519.991379,70.5651042 519.991379,82.6875 L519.991379,82.6875 L519.991379,83.453125 C519.991379,96.7239583 522.096848,107.953125 526.307786,117.140625 C530.646327,126.072917 536.771327,133.665365 544.682786,139.917969 C552.594244,146.298177 562.292161,151.529948 573.776536,155.613281 C585.133306,159.951823 597.702317,163.716146 611.483567,166.90625 L611.483567,166.90625 L615.311692,168.054688 C624.882004,170.479167 632.602056,172.839844 638.471848,175.136719 C645.362473,177.561198 650.721848,179.921875 654.549973,182.21875 C657.995286,184.643229 660.483567,187.259115 662.014817,190.066406 C663.290858,192.873698 663.928879,196.382812 663.928879,200.59375 L663.928879,200.59375 L663.928879,201.359375 C663.928879,209.270833 660.802577,215.332031 654.549973,219.542969 C648.424973,223.626302 639.684088,225.667969 628.327317,225.667969 C613.397629,225.667969 599.680181,222.796875 587.174973,217.054688 C574.669765,211.3125 561.207525,202.571615 546.788254,190.832031 L546.788254,190.832031 L509.081223,236.003906 C525.924973,251.061198 544.491379,262.290365 564.780442,269.691406 C585.197108,276.964844 605.932786,280.601562 626.987473,280.601562 Z M964.311288,280.984375 L964.311288,223.753906 L827.073006,223.753906 L827.073006,3.828125 L760.463631,3.828125 L760.463631,280.984375 L964.311288,280.984375 Z M1146.21323,282.132812 L1146.21323,227.007812 L1085.53745,227.007812 L1143.15073,85.3671875 L1223.15854,282.132812 L1292.4476,282.132812 L1174.15854,4.2109375 L1113.29135,4.2109375 L995.385102,282.132812 L1146.21323,282.132812 Z"
              />
              <path
                id="SAFE"
                fill={safeColor}
                d="M1572.03273,280.601562 C1586.96242,280.601562 1600.87127,278.623698 1613.75929,274.667969 C1626.2645,270.839844 1637.11086,265.22526 1646.29836,257.824219 C1655.35825,250.550781 1662.24888,241.682292 1666.97023,231.21875 C1671.94679,220.755208 1674.43508,208.888021 1674.43508,195.617188 L1674.43508,195.617188 L1674.43508,194.851562 C1674.43508,182.984375 1672.58482,172.776042 1668.88429,164.226562 C1665.18377,155.677083 1659.44159,148.084635 1651.65773,141.449219 C1644.12909,135.196615 1634.87778,129.709635 1623.90383,124.988281 C1613.05747,120.394531 1600.61607,116.247396 1586.57961,112.546875 C1582.87909,111.526042 1579.36997,110.56901 1576.05226,109.675781 C1569.28924,107.889323 1563.41945,106.230469 1558.44289,104.699219 C1550.91424,102.27474 1545.17205,99.9140625 1541.21633,97.6171875 C1537.2606,95.1927083 1534.51711,92.4492188 1532.98586,89.3867188 C1531.07179,86.4518229 1530.11476,82.6236979 1530.11476,77.9023438 L1530.11476,77.9023438 L1530.11476,77.1367188 C1530.11476,70.5013021 1532.85825,65.1419271 1538.34523,61.0585938 C1543.4494,56.8476562 1551.29705,54.7421875 1561.8882,54.7421875 C1572.86216,54.7421875 1583.96372,57.1028646 1595.19289,61.8242188 C1606.29445,66.4179688 1618.99107,73.5 1633.28273,83.0703125 L1633.28273,83.0703125 L1666.20461,35.6015625 C1651.78534,23.9895833 1635.96242,15.1210938 1618.73586,8.99609375 C1601.7645,2.99869792 1583.07049,0 1562.65383,0 C1548.23455,0 1535.02752,1.9140625 1523.03273,5.7421875 C1510.91034,9.953125 1500.5106,15.7591146 1491.83351,23.1601562 C1483.15643,30.4335938 1476.45721,39.1744792 1471.73586,49.3828125 C1467.26971,59.4635417 1465.03664,70.5651042 1465.03664,82.6875 L1465.03664,82.6875 L1465.03664,83.453125 C1465.03664,96.7239583 1467.14211,107.953125 1471.35304,117.140625 C1475.69159,126.072917 1481.81659,133.665365 1489.72804,139.917969 C1497.6395,146.298177 1507.33742,151.529948 1518.82179,155.613281 C1530.17857,159.951823 1542.74758,163.716146 1556.52883,166.90625 L1556.52883,166.90625 L1560.35695,168.054688 C1569.92726,170.479167 1577.64732,172.839844 1583.51711,175.136719 C1590.40773,177.561198 1595.76711,179.921875 1599.59523,182.21875 C1603.04054,184.643229 1605.52883,187.259115 1607.06008,190.066406 C1608.33612,192.873698 1608.97414,196.382812 1608.97414,200.59375 L1608.97414,200.59375 L1608.97414,201.359375 C1608.97414,209.270833 1605.84784,215.332031 1599.59523,219.542969 C1593.47023,223.626302 1584.72935,225.667969 1573.37258,225.667969 C1558.44289,225.667969 1544.72544,222.796875 1532.22023,217.054688 C1519.71502,211.3125 1506.25278,202.571615 1491.83351,190.832031 L1491.83351,190.832031 L1454.12648,236.003906 C1470.97023,251.061198 1489.53664,262.290365 1509.8257,269.691406 C1530.24237,276.964844 1550.97804,280.601562 1572.03273,280.601562 Z M1835.28233,282.132812 L1835.28233,227.007812 L1774.60655,227.007812 L1832.21983,85.3671875 L1912.22764,282.132812 L1981.5167,282.132812 L1863.22764,4.2109375 L1802.36045,4.2109375 L1684.4542,282.132812 L1835.28233,282.132812 Z M2226.96552,61.4414062 L2226.96552,4.2109375 L2012.59052,4.2109375 L2012.59052,61.4414062 L2226.96552,61.4414062 Z M2078.81708,280.21875 L2078.81708,174.371094 L2159.59052,174.371094 L2159.59052,117.140625 L2012.59052,117.140625 L2012.59052,280.21875 L2078.81708,280.21875 Z M2471.26589,60.2929688 L2471.26589,4.2109375 L2258.03933,4.2109375 L2258.03933,60.2929688 L2471.26589,60.2929688 Z M2471.26589,280.601562 L2471.26589,224.519531 L2317.94949,224.519531 L2317.94949,170.542969 L2391.25808,170.542969 L2391.25808,114.460938 L2258.03933,114.460938 L2258.03933,280.601562 L2471.26589,280.601562 Z"
              />
            </g>
            <g id="Group" transform="translate(0.000000, 0.000000)">
              <polygon
                id="Fill-4"
                fill={polygonColor}
                points="481 141.963995 412.562561 141.963995 412.562561 117.585508 274.716405 75.2546313 274.716405 475.223748 240.496528 493 206.283595 475.223748 206.283595 75.2504814 68.4374388 117.585508 68.4374388 141.963995 -5.79995525e-13 141.963995 -8.5442764e-13 82.1678763 240.496528 -1.28154518e-12 481 82.1678763"
              />
              <path
                id="Combined-Shape"
                fill={pathColor}
                fillRule="nonzero"
                d="M291.537976,342.620238 L88.645261,342.620238 L0,171.876314 L480.308411,171.876314 L446.819111,231.635019 L96.1461598,231.635049 L122.2066,282.861606 L270.599,282.861314 L270.71962,282.790713 L421.96909,282.790713 L329.445586,447.223896 L147.057644,447.223896 L113.975503,387.465191 L294.473398,387.465161 L319.569065,342.549345 L291.655,342.549314 L291.537976,342.620238 Z"
              />
              <rect
                id="Rectangle-Copy-5"
                fill={rectColor}
                x="206.439252"
                y="259.282761"
                width="68.2943925"
                height="101.571128"
              />
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
