import { Container } from "@mui/material";

import * as S from "./Layout.styled";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = { ...props };

  return <S.Container>{children}</S.Container>;
};
