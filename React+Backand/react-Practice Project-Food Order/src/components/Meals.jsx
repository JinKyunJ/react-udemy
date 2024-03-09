import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className='center'>메뉴 가져오는 중...</p>;
  }

  if (error) {
    return <Error title='메뉴를 가져오는데 실패함' message={error} />;
  }

  // if(!data) {
  //   return <p>음식 메뉴 찾지 못함</p>
  // }

  return (
    <ul id='meals'>
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
