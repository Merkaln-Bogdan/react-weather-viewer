import * as S from "./Scale.styled";

const Scale = (): React.ReactElement => {
  const scale = [
    { id: "101", time: "7:00", temp: -5 },
    { id: "102", time: "8:00", temp: -3 },
    { id: "103", time: "9:00", temp: -1 },
    { id: "104", time: "10:00", temp: 0 },
    { id: "105", time: "11:00", temp: 0 },
    { id: "106", time: "12:00", temp: -2 },
    { id: "107", time: "13:00", temp: -2 },
    { id: "108", time: "14:00", temp: -2 },
    { id: "109", time: "15:00", temp: -3 },
    { id: "110", time: "16:00", temp: -3 },
    { id: "111", time: "17:00", temp: -5 },
    { id: "112", time: "18:00", temp: -6 },
  ];

  return (
    <S.Container>
      <S.Scale>
        {scale.map((el: any) => (
          <S.Column key={el.id}>
            <S.Data>{el.time}</S.Data>
            <S.Temp style={{ transform: `translate(0px, ${el.temp}px)` }}>
              {el.temp}
            </S.Temp>
          </S.Column>
        ))}
      </S.Scale>
    </S.Container>
  );
};

export { Scale };
