import styled from "styled-components";

import { Headline } from "components/Headline";

type ScaleStyledProps = {
  isHour?: boolean;
};

const Container = styled.div`
  max-width: 50rem;

  background-color: #daf7ec;
  border-radius: 1rem;
`;
const Scale = styled.ul`
  display: flex;

  height: 10rem;
  margin: 0.5rem 0;
  padding: 0.5rem;

  list-style: none;
`;

const Column = styled.li`
  position: relative;

  display: flex;
  justify-content: center;

  width: 2.5rem;
  height: 100%;
  flex-direction: column;
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
