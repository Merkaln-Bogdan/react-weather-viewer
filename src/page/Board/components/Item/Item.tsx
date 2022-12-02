import { routes } from "data/routes";

import { Button } from "@mui/material";

import * as S from "./Item.styled";
type ItemProps = {
  city?: any;
  asAddCard?: boolean;
  removeItem?: (arg: number) => void;
  setOpen?: (arg: boolean) => void;
};

const Item = (props: ItemProps): React.ReactElement => {
  const { city, removeItem, asAddCard, setOpen } = { ...props };

  return asAddCard ? (
    <S.ListItem asAddCard={asAddCard}>
      <S.Icon onClick={() => setOpen!(true)} />
    </S.ListItem>
  ) : (
    <S.ListItem>
      <S.LinkItem to={routes.details(city.id)}>
        <S.Container>
          <S.Info color="white">{city.name}</S.Info>
          <S.Info>{Math.round(city.main.temp)} &#8451;</S.Info>
          {city.weather.map((data: any) => (
            <S.Info key={data.id}>{data.description}</S.Info>
          ))}
        </S.Container>
      </S.LinkItem>
      <Button
        onClick={() => removeItem!(city.id)}
        variant="contained"
        color="error"
      >
        Remove
      </Button>
    </S.ListItem>
  );
};

export { Item };
