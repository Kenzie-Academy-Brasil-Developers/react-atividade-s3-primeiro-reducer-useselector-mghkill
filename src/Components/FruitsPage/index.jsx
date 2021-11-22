import { useSelector } from "react-redux";

const FruitsPage = () => {
  const fruits = useSelector((store) => store.fruits);
  console.log(fruits);
  return (
    <div>
      {fruits.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
export default FruitsPage;
