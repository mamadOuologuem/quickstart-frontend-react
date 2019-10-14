import { createMuiTheme, useMediaQuery } from '@material-ui/core';
import { styled } from '@material-ui/styles';

export const contentWidth = 1280;
export const contentWidthPixels = `${contentWidth}px`;
export const mobileThreshold = 800;
export const mobileThresholdPixels = `${mobileThreshold}px`;

export const colors = {
  darkBlue: '#2F4058',
  orange: '#F47820',
  lightOrange: '#FFD2B2',
  grey: '#D8D8D8',
  lightGrey: '#FAFAFA',
  white: '#FFFFFF',
};

const theme = createMuiTheme();
export const spacing = (factor) => `${theme.spacing(factor)}px`;
export const fontSizing = (factor) => `${factor * 7}px`;

export const defaultTheme = createMuiTheme({
  palette: {
    primary: { main: `${colors.white}` },
    secondary: { main: `${colors.darkBlue}` },
    error: { main: `${colors.orange}` },
    text: {
      primary: colors.darkBlue,
      secondary: colors.orange,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: 'Roboto',
      },
      h1: {
        color: colors.white,
        fontFamily: 'Roboto',
        fontSize: fontSizing(9),
        [theme.breakpoints.down('xs')]: {
          fontSize: fontSizing(6),
          lineHeight: '60px',
        },
      },
      subtitle1: {
        color: colors.white,
        fontSize: fontSizing(3),
        fontStyle: 'italic',
      },
    },
    MuiButton: {
      root: {
        color: colors.white,
        backgroundColor: colors.orange,
        fontSize: fontSizing(2),
        fontWeight: '600',
        letterSpacing: '-0.34px',
        lineHeight: '18px',
        minHeight: '40px',
        minWidth: '152px',
        textAlign: 'center',
        textTransform: 'none',
        border: `2px solid ${colors.orange}`,
        borderRadius: '20px',
        '&:hover': {
          color: colors.orange,
          backgroundColor: 'transparent',
          borderColor: colors.orange,
        },
      },
      text: {
        padding: `6px ${spacing(4)}`,
      },
    },
  },
});

export const stylesBase = {
  muiButtonWhiteBackground: {
    backgroundColor: colors.white,
    color: colors.orange,
    border: `2px solid ${colors.white}`,
    '&:hover': {
      color: colors.white,
      backgroundColor: 'transparent',
      borderColor: colors.white,
    },
  },
};

export const useWidth = () => {
  const keys = [...defaultTheme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
};

// Shapes
export const ThickLine = styled('div')(({ width, height }) => ({
  width: width || '100%',
  height: height || spacing(1.5),
  backgroundColor: colors.orange,
}));
