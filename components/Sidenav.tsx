import * as React from 'react';
import { styled } from './globalStyle';

export function Sidenav() {
  return (
    <Navigation>
      ほげ<span>aaaaaaaaaaaaaaa</span>
    </Navigation>
  );
}

const Navigation = styled('aside', {
  backgroundColor: '$blue500',
  borderRadius: '2px',
  fontSize: '13px',
  padding: '10px 15px',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
  '& span': {
    backgroundColor: 'blue',
  },
});
