import React from 'react';
import { css, cx } from '@emotion/css';
import Header from './Header';
import FormContainer from './FormContainer';

const color = 'white'

function InnerContainer() {
  return (
    <div
    className={css`
      position:relative;
      background: rgba(255,255,255,0.2);
      box-shadow: 0 15px 15px rgb(0,0,0 / 5%);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.25);
      border-top: 1px solid rgba(255,255,255,0.5);
      border-left: 1px solid rgba(255,255,255,0.5);
      padding:20px;
      font-size: 24px;
      border-radius: 25px;
      min-height: 100vh;
      &:hover {
        color: ${color};
      }
    `}
  >
    <Header />
    <FormContainer />
  </div>
  )
}

export default InnerContainer;
