import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types'

const app = shallow(<App />)

it('renders correctly', () =>{
    expect(app).toMatchSnapshot()
})
it('initializes the `state` with an empty list of gifts', () =>{
    expect(app.state().gifts).toEqual([])
})
it('add a new gift to state when clicking the ADD GIFT button', () =>{
    app.find('.btn-add').simulate('click')
    expect(app.state().gifts).toEqual([{id: 1}])
})
it('add a newe gift to the render list when clicking the add gift button', () =>{
    app.find('.btn-add').simulate('click')
    expect(app.find('.gift-list').children().length).toEqual(2)
})
