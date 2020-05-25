import React from 'react';
import TestElement from './../TestElement.js';
import {cleanup,render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


  afterEach(cleanup);
  it("counter should equal to zero",()=>{
    const {getByTestId} = render(
      <TestElement/>
    );
    expect(getByTestId('counter')).toHaveTextContent(0);
  })

  it("increment button should be enabled",()=>{
    const {getByTestId} = render(
      <TestElement/>
    );

    expect(getByTestId("button-up")).not.toHaveAttribute('disabled')
  })

  it("decrement button should be disabled",()=>{
    const {getByTestId} = render(
      <TestElement/>
    );

    expect(getByTestId("button-down")).toHaveAttribute('disabled')
  })
