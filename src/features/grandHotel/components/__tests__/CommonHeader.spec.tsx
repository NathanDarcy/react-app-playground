import {render, screen} from '@testing-library/react';
import {describe, it, expect} from 'vitest';
import CommonHeader from '../CommonHeader';

describe('CommonHeader1', () => {
  it('renders the heading text', () => {
    render(<CommonHeader headingText='Test Heading' />);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(
        'Test Heading',
    );
  });
});

describe('CommonHeader', () => {
  it('renders the heading text', () => {
    render(<CommonHeader headingText='Test Heading' />);
    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(
        'Test Heading',
    );
  });
});
