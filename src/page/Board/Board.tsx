import { Button, TextField } from "@mui/material";

import { DefaultLayout } from "sections/Layout";

import { useBoard } from "./Board.hooks";
import { Item } from "./components/Item";

import * as S from "./Board.styled";
import * as SG from "styles";

function Board(): React.ReactElement {
  const {
    cities,
    loading,
    handleAddCity,
    setQuery,
    removeData,
    setIsSearchOpen,
    isSearchOpen,
  } = useBoard();

  return (
    <DefaultLayout>
      <S.Container>
        {loading ? (
          <>Loading...</>
        ) : (
          <S.Container>
            <S.List>
              {cities &&
                cities?.map((item: any) => (
                  <Item city={item} removeItem={removeData!} key={item.id} />
                ))}
              <Item asAddCard key="addCardKey11" setOpen={setIsSearchOpen} />
            </S.List>
          </S.Container>
        )}

        {isSearchOpen && (
          <SG.Box>
            <TextField
              onChange={(e) => setQuery(e.target.value)}
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              sx={{ marginRight: "1rem" }}
            />

            <Button variant="contained" onClick={handleAddCity}>
              Add city
            </Button>
          </SG.Box>
        )}
      </S.Container>
    </DefaultLayout>
  );
}

export { Board };
