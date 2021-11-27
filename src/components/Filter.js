import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, media } from "styled-bootstrap-grid";
import { BsFilter } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";

export default function Filter() {
  const types = [
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "ghost",
    "dark",
    "dragon",
    "fairy",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "steel",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const Checkbox = ({ type }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <ControlContainer onClick={() => setIsChecked(!isChecked)}>
        <input
          type="checkbox"
          name={type}
          checked={isChecked}
          onChange={() => setIsChecked(false)}
        />
        <label forhtml={type}>{type}</label>
      </ControlContainer>
    );
  };

  return (
    <>
      <FilterHeader>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <MdOutlineClose size="2rem" /> : <BsFilter size="2rem" />}
          <h3>Filter Pokemon</h3>
        </button>
      </FilterHeader>
      <FilterBody $isOpen={isOpen}>
        <Container>
          <Row>
            <Col xs={6} sm={6} md={12}>
              <Types>
                {types.slice(0, 9).map((type, index) => (
                  <Checkbox key={`col1${index}`} type={type} />
                ))}
              </Types>
            </Col>
            <Col xs={6} sm={6} md={12}>
              <Types>
                {types.slice(9, 18).map((type, index) => (
                  <Checkbox key={`col2${index}`} type={type} />
                ))}
              </Types>
            </Col>
          </Row>
        </Container>
      </FilterBody>
    </>
  );
}

const FilterHeader = styled.div`
  margin-bottom: 2.3125rem;

  button {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    h3 {
      font-size: 1rem;
      font-weight: 600;
      margin-left: 0.875rem;
    }
  }
`;

const FilterBody = styled.div`
  display: ${(props) => (props.$isOpen ? "initial" : "none")};
`;

const Types = styled.div`
  ${media.md`
    display: flex;
  `}
`;

const ControlContainer = styled.div`
  margin-bottom: 1.3125rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  label {
    text-transform: capitalize;
    margin-left: 2rem;
    cursor: pointer;
    user-select: none;
  }

  input {
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    pointer-events: none;

    &::before {
      content: "";
      width: 1.15em;
      height: 1.15em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${(props) => props.theme.colors.blue};
      border-radius: 50%;
    }
  }

  input[type="checkbox"]:checked::before {
    transform: scale(1);
  }
`;
