import {
  composeStyles,
  keyframes,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { braidDarkModeClass } from '../../css/atoms/sprinkles.css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const rootSize = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: {
      height: mobile.capHeight,
    },
    tablet: {
      height: tablet.capHeight,
    },
  }),
);

export const size = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: {
      height: mobile.fontSize,
    },
    tablet: {
      height: tablet.fontSize,
    },
  }),
);

export const lightMode = styleVariants({
  light: {
    selectors: {
      [`html:not(.${braidDarkModeClass}) &`]: {
        fill: vars.foregroundColor.neutral,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(.${braidDarkModeClass}) &`]: {
        fill: vars.foregroundColor.neutralInverted,
      },
    },
  },
});

export const darkMode = styleVariants({
  light: {
    selectors: {
      [`html.${braidDarkModeClass} &`]: {
        fill: vars.foregroundColor.neutral,
      },
    },
  },
  dark: {
    selectors: {
      [`html.${braidDarkModeClass} &`]: {
        fill: vars.foregroundColor.neutralInverted,
      },
    },
  },
});

const bounce = keyframes({
  '33%': {
    transform: `translateY(-1.4em)`,
  },
  '66%': {
    transform: `translateY(1.4em)`,
  },
});

const bounceAnimation = style({
  animationName: bounce,
  animationFillMode: 'both',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationDuration: '0.6s',
});

const animationDelayInMs = 70;
export const circle = composeStyles(
  bounceAnimation,
  style({
    transform: `translateY(1.4em)`,
    selectors: {
      [`&:nth-child(1)`]: {
        animationDelay: `${animationDelayInMs * 2}ms`,
      },
      [`&:nth-child(2)`]: {
        animationDelay: `${animationDelayInMs}ms`,
      },
    },
  }),
);

export const animationDelayValueInMs = 800;

const fade = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
export const delay = style({
  opacity: 0,
  animationName: fade,
  animationIterationCount: '1',
  animationFillMode: 'forwards',
  animationTimingFunction: 'ease-in',
  animationDuration: '0.25s',
  animationDelay: `${animationDelayValueInMs}ms`,
});