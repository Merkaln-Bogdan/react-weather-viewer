import { Link } from "react-router-dom";
import { routes } from "data/routes";

import { BsPlusSquare } from "react-icons/bs";

import { Button } from "@mui/material";
import { Headline } from "components/Headline";

import * as S from "./Item.styled";
type ItemProps = {
  city?: any;
  asAddCard?: boolean;
  removeItem?: (arg: number) => void;
};

const Item = (props: ItemProps): React.ReactElement => {
  const { city, removeItem, asAddCard } = { ...props };

  return asAddCard ? (
    <S.ListItem>
      <BsPlusSquare />
    </S.ListItem>
  ) : (
    <S.ListItem>
      <Button
        onClick={() => removeItem!(city.id)}
        variant="contained"
        color="error"
      >
        Remove
      </Button>
      <S.LinkItem to={routes.details(city.id)}>
        <S.Container>
          <S.Info>{city.name}</S.Info>
          <S.Info>{Math.round(city.main.temp)} &#8451;</S.Info>
          {city.weather.map((data: any) => (
            <S.Info key={data.id}>{data.description}</S.Info>
          ))}
        </S.Container>
      </S.LinkItem>
    </S.ListItem>
  );
};

export { Item };
