import { TextField } from "@mui/material";

import { DefaultLayout } from "sections/Layout";
import { useBoard } from "./Board.hooks";

import * as S from "./Board.styled";
import { Item } from "./components/Item";

function Board(): React.ReactElement {
  const { citiesData, handleAddCity, removeData } = useBoard();

  return (
    <DefaultLayout>
      <S.Container>
        <TextField
          onChange={handleAddCity}
          id="outlined-basic"
          label="Search"
          variant="outlined"
        />
        <S.Container>
          <S.List>
            {citiesData &&
              citiesData?.map((item: any) => (
                <Item city={item} removeItem={removeData!} key={item.id} />
              ))}
            <Item asAddCard key="additionalKey11" />
          </S.List>
        </S.Container>
      </S.Container>
    </DefaultLayout>
  );
}

export { Board };
