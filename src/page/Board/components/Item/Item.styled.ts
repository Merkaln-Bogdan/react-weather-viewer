import styled from "styled-components";

import { Link } from "react-router-dom";
import { Headline } from "components/Headline";

export type ItemStyledProps = {
  asAddCard?: boolean;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li<ItemStyledProps>`
  display: flex;
  flex-direction: column;

  width: 170px;
  height: 250px;
  margin-right: 0.7rem;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
`;

const Info = styled(Headline)``;

export { Container, ListItem, LinkItem, Info };
