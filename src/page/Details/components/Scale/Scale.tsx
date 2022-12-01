import * as S from "./Scale.styled";
const Scale = (): React.ReactElement => {
  const scale = -2;
  return (
    <S.Container>
      <ul>
        <li style={{ transform: `translate(0px, ${scale}px)` }}>
          <span style={{ display: "flex", flexDirection: "column" }}>
            14:00
          </span>
          <span>-2</span>
        </li>
      </ul>
    </S.Container>
  );
};

export { Scale };
