import styled from "styled-components";

import { backgroundChooser } from "helpers/backgroundChooser";

import { Headline } from "components/Headline";
import { Icon } from "components/Icon";

type DetailsStyledProps = {
  isMain?: boolean;
  asBackground?: number;
};

const Container = styled.div<DetailsStyledProps>`
  display: flex;
  flex-direction: column;
  align-items-center;

  max-width: 50rem;
  padding: 2rem;
  margin: 0 auto;

  background-image: url(${({ asBackground }) =>
    asBackground && backgroundChooser(asBackground)});
  background-size: cover;
  border-radius: 1rem;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  @media (max-width: 647px) {
    flex-direction: column;
  }
  color: #2e3a3d;
`;
const Text = styled(Headline)<DetailsStyledProps>`
  margin-right: 2rem;
  color: #2e3a3d;

  font-size: ${({ isMain }) => (isMain ? "3rem" : "1.5rem")};
  font-weight: ${({ isMain }) => (isMain ? "700" : "500")};

  text-transform: capitalize;
  text-shadow: 1px 1px 2px red, 0 0 1em white, 0 0 0.2em white;

  @media (max-width: 647px) {
    margin: 0.5rem 0;
  }
`;
const SvgIcon = styled(Icon)`
  font-size: 3rem;
  font-weight: bold;
  margin-left: 1.5rem;

  vertical-align: middle;
  color: #5b4b6b;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export { Container, Box, List, ListItem, Text, SvgIcon };
