import { Button } from "@mui/material";

import { DefaultLayout } from "sections/Layout";

import { Scale } from "./components/Scale";

import { useDetails } from "./Details.hooks";

import * as S from "./Details.styled";

function Details(): React.ReactElement {
  const { city, loading, updateInfo } = useDetails();

  return loading ? (
    <>Loading...</>
  ) : (
    <DefaultLayout>
      <S.Container asBackground={city.clouds?.all}>
        <S.Box>
          <S.Text isMain>{city.name}</S.Text>
          <S.Text isMain>{Math.round(city.main.temp)} &#8451;</S.Text>
        </S.Box>

        <S.Text>
          wind {city.wind.speed}m/s <S.SvgIcon name="WiStrongWind" />
        </S.Text>

        <S.List>
          {city &&
            city.weather?.map((el: any) => (
              <S.ListItem key={el.id}>
                <S.Text tag="span">{el.main}</S.Text>
                <S.Text tag="span">
                  {el.description}
                  <S.SvgIcon name="WiCloudy" />
                </S.Text>
              </S.ListItem>
            ))}
        </S.List>

        <Scale />

        <Button
          onClick={() => updateInfo()}
          sx={{
            width: "fit-content",
            margin: "0 auto",
            margiBottom: 20,
          }}
          variant="contained"
          size="medium"
        >
          Update info
        </Button>
      </S.Container>
    </DefaultLayout>
  );
}
export { Details };
