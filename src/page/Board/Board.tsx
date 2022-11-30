import { routes } from "data/routes";
import { Link } from "react-router-dom";
import { useBoard } from "./Board.hooks";

function Board() {
  const { citiesData, handleAddCity, removeData } = useBoard();
  return (
    <div>
      <input onChange={handleAddCity} />
      <ul
        style={{
          width: "100%",
          display: "flex",
          listStyle: "none",
        }}
      >
        {citiesData &&
          citiesData?.map((el: any) => (
            <li
              style={{
                width: "250px",
                height: "250px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                border: "1px solid gray",
                marginRight: "10px",
              }}
              key={el.id}
            >
              <button onClick={() => removeData(el.id)}>Remove</button>
              <Link to={routes.details(el.id)}>
                <div
                  style={{
                    width: "180px",
                    height: "180px",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    flexDirection: "column",
                    border: "1px solid gray",
                    marginRight: "10px",
                  }}
                >
                  <span>{el.name}</span>
                  <span>{el.main.temp}</span>
                  {el.weather.map((data: any) => (
                    <span key={data.id}>{data.main}</span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export { Board };
