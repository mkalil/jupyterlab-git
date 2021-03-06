import { style } from 'typestyle';

export const wrapperClass = style({
  marginTop: '6px',
  marginBottom: '0'
});

export const filterWrapperClass = style({
  padding: '4px 11px 4px'
});

export const filterClass = style({
  boxSizing: 'border-box',
  display: 'inline-block',
  position: 'relative',

  width: 'calc(100% - 7.7em - 11px)', // full_width - button_width - right_margin

  marginRight: '11px',

  fontSize: 'var(--jp-ui-font-size1)'
});

export const filterInputClass = style({
  boxSizing: 'border-box',

  width: '100%',
  height: '2em',

  /* top | right | bottom | left */
  padding: '1px 18px 2px 7px',

  color: 'var(--jp-ui-font-color0)',
  fontSize: 'var(--jp-ui-font-size1)',
  fontWeight: 300,

  backgroundColor: 'var(--jp-layout-color1)',

  border: 'var(--jp-border-width) solid var(--jp-border-color2)',
  borderRadius: '3px',

  $nest: {
    '&:active': {
      border: 'var(--jp-border-width) solid var(--jp-brand-color1)'
    },
    '&:focus': {
      border: 'var(--jp-border-width) solid var(--jp-brand-color1)'
    }
  }
});

export const filterClearClass = style({
  position: 'absolute',
  right: '5px',
  top: '0.6em',

  height: '1.1em',
  width: '1.1em',

  padding: 0,

  backgroundColor: 'var(--jp-inverse-layout-color4)',

  border: 'none',
  borderRadius: '50%',

  $nest: {
    svg: {
      width: '0.5em!important',
      height: '0.5em!important',

      fill: 'var(--jp-ui-inverse-font-color0)'
    },
    '&:hover': {
      backgroundColor: 'var(--jp-inverse-layout-color3)'
    },
    '&:active': {
      backgroundColor: 'var(--jp-inverse-layout-color2)'
    }
  }
});

export const newBranchButtonClass = style({
  boxSizing: 'border-box',

  width: '7.7em',
  height: '2em',

  color: 'white',
  fontSize: 'var(--jp-ui-font-size1)',

  backgroundColor: 'var(--jp-brand-color1)',
  border: '0',
  borderRadius: '3px'
});

export const listWrapperClass = style({
  display: 'block',
  width: '100%',
  minHeight: '150px',
  maxHeight: '400px',

  overflow: 'hidden',
  overflowY: 'auto'
});

export const listItemClass = style({
  paddingTop: '4px!important',
  paddingBottom: '4px!important',
  paddingLeft: '11px!important'
});

export const activeListItemClass = style({
  color: 'white!important',

  backgroundColor: 'var(--jp-brand-color1)!important'
});

export const listItemIconClass = style({
  width: '16px',
  height: '16px',

  marginRight: '4px',

  backgroundImage: 'var(--jp-icon-git-branch)',
  backgroundSize: '16px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
});
