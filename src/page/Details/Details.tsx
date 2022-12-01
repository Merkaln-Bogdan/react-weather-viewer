import { DefaultLayout } from "sections/Layout";

import { Scale } from "./components/Scale";
import { useDetails } from "./Details.hooks";

import * as S from "./Details.styled";
import { Headline } from "components/Headline";
import { Button } from "@mui/material";

function Details(): React.ReactElement {
  const { cityData, updateInfo } = useDetails();
  console.log(cityData);

  return !cityData ? (
    <>Loading</>
  ) : (
    <DefaultLayout>
      <S.Container>
        <S.Box>
          <S.City>{cityData.name}</S.City>
          <S.Temperature>
            {Math.round(cityData.main.temp)} &#8451;
          </S.Temperature>
        </S.Box>
        <Headline>wind {cityData.wind.speed}m/c</Headline>

        <S.List>
          {cityData &&
            cityData.weather?.map((el: any) => (
              <S.ListItem key={el.id}>
                <Headline tag="span">{el.main}</Headline>
                <Headline tag="span">{el.description}</Headline>
              </S.ListItem>
            ))}
        </S.List>

        <Scale />

        <Button onClick={() => updateInfo()}>Renew info</Button>
      </S.Container>
    </DefaultLayout>
  );
}
export { Details };
