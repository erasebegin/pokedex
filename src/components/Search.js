import React from "react";
import styled from "styled-components";

export default function Search({ searchTerm, setSearchTerm }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <SearchContainer onSubmit={handleSubmit}>
      <label htmlFor="search-box">Search</label>
      <input
        type="text"
        name="search-box"
        placeholder="Search the Pokedex"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </SearchContainer>
  );
}

const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  // hide label while retaining visibility to screen readers
  label {
    border-width: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input,
  button {
    border-radius: 2rem;
  }

  input {
    border: 1px solid ${(props) => props.theme.colors.grey};
    padding: 1rem 1rem 0.75rem;
    margin-bottom: 0.875rem;
    text-align: center;

    &::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 300;
      color: ${(props) => props.theme.colors.grey2};
    }

    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    padding: 0.875rem 1rem 0.75rem;
    border: none;
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.blue};
      transition: background 200ms ease-in-out;
    }

    &:active {
      background: ${(props) => props.theme.colors.red};
    }
  }
`;
