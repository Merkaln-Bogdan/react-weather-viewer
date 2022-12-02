import styled from "styled-components";

import { Link } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";

import { Headline } from "components/Headline";

import imgBG from "assets/25502.png";

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
  align-items: center;
  justify-content: ${({ asAddCard }) => (asAddCard ? "center" : "end")};

  width: 12rem;
  height: 17rem;
  padding: 1rem;
  margin: 0 0.7rem 0.7rem 0;

  border-radius: 0.5rem;
  background: url(${imgBG});
  background-size: cover;
`;
const LinkItem = styled(Link)`
  text-decoration: none;
`;

const Info = styled(Headline)`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: capitalize;
`;

const Icon = styled(BsPlusSquare)`
  width: 3rem;
  height: 3rem;

  color: white;
`;

export { Container, ListItem, LinkItem, Info, Icon };
