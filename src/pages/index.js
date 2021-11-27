import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../components/Search";
import Filter from "../components/Filter";
import Cards from "../components/Cards";
import useFetch from "../hooks/useFetch";
import { graphql } from "gatsby";

const IndexPage = ({data: lala}) => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(6);

  const { data, isLoading, error } = useFetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
console.log({lala})
  return (
    <Main>
      <Hero>
        <h1>
          Welcome to the <b>Pokedex.</b>
        </h1>
        <p>
          The comprehensive database of Pokemon from the original Blue and Red
          version.
          <br />
          <b>Find your favourite and check out their stats.</b>
        </p>
      </Hero>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filter setSelectedTypes={setSelectedTypes} />
      {error && <p>Could not retreive data</p>}
      <Cards pokemonData={data} isLoading={isLoading} />
    </Main>
  );
};

const Main = styled.main`
  font-family: "Poppins", sans-serif;
  padding: 1.25rem 1.5rem;
`;

const Hero = styled.div`
  margin-bottom: 1.75rem;

  h1 {
    font-weight: 500;
    font-size: 3.125rem;
    line-height: 3.4375rem;
    margin-bottom: 0.875rem;

    b {
      font-weight: 700;
    }
  }

  p {
    font-weight: 300;

    b {
      font-weight: 500;
    }
  }
`;

export default IndexPage;

export const query = graphql`
  query {
    file(relativePath: { eq: "images/image.jpg" }) {
      childImageSharp {
        # Specify a fixed image and fragment.
        # The default width is 400 pixels
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
