import styled from "styled-components";

import { Headline } from "components/Headline";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 50rem;
  padding: 2rem;

  background-color: #abebea;
  border-radius: 1rem;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  color: #2e3a3d;
`;

const City = styled(Headline)`
  font-size: 2rem;
  font-weight: bold;

  margin-right: 2rem;
  color: #2e3a3d;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const Temperature = styled(Headline)`
  font-size: 3rem;
`;

export { Container, Box, City, List, ListItem, Temperature };
