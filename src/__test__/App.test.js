import React from 'react';
import App from './../App.js';
import {render,cleanup} from '@testing-library/react';


it("should take snapshot of app",()=>{
  const {asFragment} = render(<App/>)
  expect(asFragment(<App/>)).toMatchSnapshot()
})
