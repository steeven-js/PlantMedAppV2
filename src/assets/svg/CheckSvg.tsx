import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const CheckSvg: React.FC = () => {
  return (
    <Svg width={14} height={10} fill='none'>
      <G clipPath='url(#a)'>
        <Path
          stroke='#fff'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M12.333 1 5 8.333 1.667 5'
        />
      </G>
      <Defs>
        <ClipPath id='a'>
          <Path fill='#fff' d='M0 0h14v10H0z' />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckSvg;
