import React from 'react'
import { test, expect, render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
    render(<App />)
    const linkElement = screen.getByText(/Olá mundo/i)
    expect(linkElement).toBeInTheDocument()
})
