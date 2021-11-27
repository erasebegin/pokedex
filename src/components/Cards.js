import React from "react";
import styled from "styled-components";

export default function Cards({ pokemonData }) {

  function createGroups(arr = [], perGroup) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += perGroup) {
      newArr.push(arr.slice(i, i + perGroup));
    }
    return newArr;
  }

  return (
    <div>
      <img
        src="../images/Pokedex.svg"
        alt="outline title text that reads Pokedex"
      />
      {createGroups(pokemonData.results, 3).map((group, index) => (
        <Section key={`section${index}`}>
          {group.map((pokemon) => (
            <p key={pokemon.id}>{pokemon.name}</p>
          ))}
        </Section>
      ))}
    </div>
  );
}

const Section = styled.section`
  padding: 1rem;
  background: ${(props) => props.theme.colors.red};

  &:nth-child(odd) {
    background: ${(props) => props.theme.colors.blue};
  }
`;
