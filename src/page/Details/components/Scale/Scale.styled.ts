import styled from "styled-components";

import { Headline } from "components/Headline";

type ScaleStyledProps = {
  isHour?: boolean;
};

const Container = styled.div`
  max-width: 50rem;
  margin-bottom: 2rem;

  background-color: #daf7ec;
  border-radius: 0.5rem;

  @media (max-width: 647px) {
    overflow-y: scroll;
  }
`;
const Scale = styled.ul`
  display: flex;

  height: 10rem;
  margin: 0.5rem 0;
  padding: 0.5rem;

  list-style: none;

  @media (max-width: 647px) {
    display: -webkit-box;
  }
`;

const Column = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 2.5rem;
  height: 100%;
  margin-bottom: 1rem;

  border: 1px solid #cce3da;
`;
const Temp = styled.span`
  background-color: #88b6db;
  text-align: center;
  padding: 0.2rem;
`;
const Data = styled(Headline)<ScaleStyledProps>`
  position: absolute;
  top: 0;

  margin: 0.5rem 0;
`;

export { Container, Scale, Column, Data, Temp };
