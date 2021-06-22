import React from 'react'
import { render, cleanup } from 'react-testing-library';
import pet, { ANIMALS, _breeds, _dogs } from '@frontendmasters/pet';

import SearchParams from '../SearchParams';
import { expect, test } from '@jest/globals';

afterEach(cleanup);

test("SearchParams", async () => {
  const { getByTestId } = render(<SearchParams />);

  const animalDropdown = getByTestId("use-dropdown-animal");
  expect(animalDropdown.children.length).toEqual(ANIMALS.length + 1);
})