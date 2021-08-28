import '@testing-library/jest-dom';
import { render, screen, logRoles } from '@testing-library/react';
import PokemonCard from './PokemonCard';

describe('Pokemon Card', () => {
  it('should have a heading of ‘Shopping List’', () => {
    const { name, sprites, stats } = props.pokemon;
    logRoles(document);
    render(<PokemonCard props={props.pokemon} />);

    const headingEl = screen.getByRole('heading');
    expect(headingEl).toBeInTheDocument();

    // const imageEl = screen.getByRole('list');
    // expect(imageEl).toBeInTheDocument();

    // const buttonEl = screen.getByRole('button');
    // expect(buttonEl).toBeInTheDocument();
  });
});

// Test a single pokemon card:
//  - heading
//  - image
//  - button

// Import a single pokemon object to test the component.

// Do we need to test the Stats List here?
