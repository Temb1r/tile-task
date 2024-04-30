import React, { useRef, useState } from "react";

const MainComponent = () => {
  const childRef = useRef(null);

  const toggleChildVisibility = () => {
    if (childRef.current) {
      childRef.current.toggleButton(); // method to hide or show child component
    }
  };

  return (
    <>
      <button onClick={toggleChildVisibility}>toggle child component</button>
      <ChildComponent ref={childRef} />{" "}
      {/* set ref to control child component */}
    </>
  );
};

const ChildComponent = React.forwardRef((props, ref) => {
  const [isActive, setIsActive] = useState(true);

  const toggleButton = () => setIsActive(!isActive);

  React.useImperativeHandle(ref, () => ({
    toggleButton,
  }));

  return isActive ? <div>child component</div> : null;
});
