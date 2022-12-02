import styled from "styled-components";

export type TextProps = {
  color?: string;
};

const Text = styled.p<TextProps>`
  text-align: center;
  color: ${({ color }) => (color ? color : "#2e3a3d")};
`;

export { Text };
