import "./App.css";
import Card from "./Components/Card";
import Nav from "./Components/Nav";

function App() {
  const foodData = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum 700px center;sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
    {
      name: "RAMEN",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/ramen.png",
      type: "lunch",
    },
    {
      name: "GRILLED CHICKEN",
      price: 45,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/chicken.png",
      type: "dinner",
    },
    {
      name: "CAKE",
      price: 18,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/cake.png",
      type: "breakfast",
    },
    {
      name: "BURGER",
      price: 23,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/burger.png",
      type: "lunch",
    },
    {
      name: "PANCAKE",
      price: 25,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/pancake.png",
      type: "dinner",
    },
  ];
  return (
    <>
      <div className="min-h-screen main">
        <Nav />
        <div className="flex flex-col md:flex-row md:flex-wrap bg-cover bg-center gap-2 pb-10">
          {foodData.map((food, index) => (
            <Card foodData={food} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
