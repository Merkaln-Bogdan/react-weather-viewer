import { useDetails } from "./Details.hooks";

function Details() {
  const { cityData } = useDetails();
  console.log(cityData);
  return (
    <div>
      <ul>
        {cityData &&
          cityData?.map((el: any) => <li key={el.id}>{el.main.temp}</li>)}
      </ul>
    </div>
  );
}
export { Details };
