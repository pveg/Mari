import { PopupWidget } from "react-calendly";

const Calendly = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/learn-portuguese-with-mariana"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Schedule your class!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default Calendly;