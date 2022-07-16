import React from 'react';
import { render, screen } from '@testing-library/react';
import { AppPage } from './AppPage';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

test('renders learn react link', () => {
  render(<MemoryRouter initialEntries={["/1"]}>
    <Routes>
      <Route path=":sample" element={<AppPage />} />
    </Routes>
  </MemoryRouter>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
