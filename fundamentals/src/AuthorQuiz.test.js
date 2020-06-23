import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import AuthorQuiz from './AuthorQuiz';
/*
describe("Author Quiz", ()=>{
  it("Renders without crashing", ()=>{
    const div=document.createElement("div");
    ReactDOM.render(<AuthorQuiz/>, div);
  })
})*/

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
