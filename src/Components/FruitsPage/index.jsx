import { useSelector } from "react-redux";
import { StyledFruits } from "./styles";

const FruitsPage = () => {
  const fruits = useSelector((store) => store.fruits);
  console.log(fruits);
  return (
    <StyledFruits>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledFruits>
  );
};
export default FruitsPage;
