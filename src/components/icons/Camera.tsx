import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import { Colors } from '@styles';

interface Props {
  width?: number;
}

const DEFAULT_WIDTH = 34;

export const Camera: React.FC<Props> = ({ width = DEFAULT_WIDTH }) => {
  return (
    <Svg viewBox="0 0 34 34" width={width} height={width}>
      <Circle cx="17" cy="17" r="17" fill={Colors.prussianBlue as string} />
      <Path d="m17 16.145c-0.52 0-1.008 0.1942-1.384 0.5594-0.368 0.3574-0.568 0.8313-0.56 1.3207v0.0078c0 0.505 0.2 0.9789 0.568 1.3363s0.856 0.5516 1.376 0.5516c1.072 0 1.936-0.8468 1.944-1.8879 0-0.505-0.2-0.9789-0.568-1.3363s-0.856-0.5516-1.376-0.5516zm4.488 0.0544c-0.4 0-0.72-0.3108-0.72-0.6992 0-0.3885 0.32-0.707 0.72-0.707s0.728 0.3185 0.728 0.707c0 0.3884-0.328 0.6992-0.728 0.6992zm-2.272 3.9933c-0.568 0.5516-1.352 0.8935-2.216 0.8935-0.84 0-1.624-0.3186-2.224-0.8935-0.592-0.5827-0.92-1.344-0.92-2.1598-8e-3 -0.808 0.32-1.5694 0.912-2.1521 0.6-0.5826 1.392-0.9012 2.232-0.9012s1.632 0.3186 2.224 0.8935c0.592 0.5827 0.92 1.3518 0.92 2.1598-8e-3 0.8468-0.36 1.6082-0.928 2.1598zm2.296-7.5827c-0.072 0-0.128-0.0388-0.16-0.0932l-0.08-0.1709c-0.216-0.4429-0.464-0.9556-0.616-1.2509-0.368-0.6992-1-1.0876-1.776-1.0954h-3.768c-0.776 0.0078-1.4 0.3962-1.768 1.0954-0.16 0.3108-0.432 0.8702-0.656 1.3286l-0.048 0.0932c-0.024 0.0622-0.088 0.0932-0.152 0.0932-1.928 0-3.488 1.5228-3.488 3.3874v4.6149c0 1.8645 1.56 3.3873 3.488 3.3873h9.024c1.92 0 3.488-1.5228 3.488-3.3873v-4.6149c0-1.8646-1.568-3.3874-3.488-3.3874z" clipRule="evenodd" fill={Colors.alabaster as string} fillRule="evenodd" />
    </Svg>
  );
};