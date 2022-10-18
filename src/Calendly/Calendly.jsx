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
    </div>
  );
};

export default Calendly;