import { MouseEventHandler } from 'react';
import styled from 'styled-components';


const colors = {
  blue: {
    bg: [205, 200, 255],
    shadow: [155, 155, 215],
    border: [225, 225, 255]
  },
  green: {
    bg: [205, 255, 200],
    shadow: [155, 215, 155],
    border: [225, 255, 225]
  },
  red: {
    bg: [255, 205, 200],
    shadow: [215, 155, 155],
    border: [255, 225, 225]
  },
  default: {
    bg: [220, 220, 220],
    shadow: [150, 150, 150],
    border: [235, 235, 235]
  }
}

const Button = styled.div<{ bg: string, border: string, shadow: string, size: number, opacity: number }>`
  cursor: pointer;
  background: rgb(${({bg}) => bg});
  opacity: ${({opacity}) => opacity};
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  max-width: ${({size}) => size}px;
  max-height: ${({size}) => size}px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 0 rgb(${({shadow}) => shadow});
  border: 3px solid rgb(${({border}) => border});
  transition: 0.25s;
  margin: 0 3px;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    opacity: 0.3;
  }

`;

const SizeMap = {
  "xs": 10,
  "sm": 20,
  "md": 30,
  "lg": 35,
  "xl": 40
}

type Props = {
  children?: string | JSX.Element | JSX.Element[],
  onClick?: MouseEventHandler<HTMLDivElement> | undefined,
  color?: 'default' | 'blue' | 'green' | 'red',
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  opacity?: number
}
const ButtonCircle = ({ children, onClick = () => {}, color='default', size='md', opacity=1 }: Props) => {

  const bgColor = colors[color].bg.join(',');
  const shadowColor = colors[color].shadow.join(',');
  const borderColor = colors[color].border.join(',');

  return (
    <Button
      size={SizeMap[size]}
      onClick={onClick} 
      bg={bgColor} 
      shadow={shadowColor} 
      border={borderColor}
      opacity={opacity}
    >
      {children}
    </Button>
  );
}

export default ButtonCircle;