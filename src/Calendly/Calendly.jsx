import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/learn-portuguese-with-mariana"
        rootElement={document.getElementById("root")}
        text="Schedule your class!"
        textColor="#ffffff"
      />
        <div>
        <img src="https://res.cloudinary.com/daknbj7xw/image/upload/v1666089049/Mari/pngwing.com_bfwzey.png" alt="" />
        </div>
    </div>
  );
};

export default Calendly;