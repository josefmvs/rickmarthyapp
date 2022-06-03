
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import CharacterPage from './CharacterPage';
import { GET_CHARACTERS } from "../api/charactersQueries";
import { render } from '@testing-library/react';

it("should render without error", () => {
  const { container } = render(
    <MockedProvider mocks={[]}>
      <CharacterPage />
    </MockedProvider>,
  );
  expect(container).toBeDefined();
});

it('should render character', async () => {
  const characterMock = {
    request: {
      query: GET_CHARACTERS,
      variables: { page: 1 },
    },
    result: {
      data: { characters: { info: {count: 1 ,pages: 1, next: 3, prev: null},results: [{ id: 1, name: 'Josef', gender: 'Male', type: '',image: '' }]},
    }},
  };

  const component = TestRenderer.create(
   
        <MockedProvider mocks={[characterMock]}>
          <CharacterPage />
        </MockedProvider>

  );

  await new Promise(resolve => setTimeout(resolve, 2000)); 

  expect(component.root.findAllByType("p")[0].children.join('')).toContain('Josef');

});