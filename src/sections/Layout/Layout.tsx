import { Headline } from "components/Headline";

import * as S from "./Layout.styled";

export type DefaultLayoutProps = {
  children: React.ReactNode;
};

export const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = { ...props };

  return (
    <S.Container>
      <Headline tag="h1">Weather viewer</Headline>
      {children}
    </S.Container>
  );
};
