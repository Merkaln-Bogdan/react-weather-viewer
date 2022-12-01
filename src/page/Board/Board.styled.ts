import styled from "styled-components";
export type BoardStyledProps = {
  asAddCard?: boolean;
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export { Container, List };
