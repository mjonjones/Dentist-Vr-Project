import renderer from 'react-test-renderer';
import React from 'react';
import Title from '../Title';
import ReactDOM from 'react-dom';

it('renders a snapshot of Title', () => {
    const tree = renderer.create(<Title/>).toJSON();
    expect(tree).toMatchSnapshot();
});

it('renders a snapshot of Title with props', () => {
    let text = "Test";
    const tree = renderer.create(<Title txt={text}/>).toJSON();
    expect(tree).toMatchSnapshot();
});