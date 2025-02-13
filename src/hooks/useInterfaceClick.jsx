import { useEffect } from "react";

function useInterfaceClick(refs, handleMouseMove) {
  function handleMove(event) {
    let interfaceClick = false;
    refs.forEach((element) => {
      if (element.current && element.current.contains(event.target)) {
        interfaceClick = true;
        handleMouseMove();
        //console.log("INTERFACE");
      }
    });
    if (!interfaceClick) {
      //console.log("NOT INTERFACE");
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleMove);
    document.addEventListener("touchmove", handleMove);
    document.addEventListener("touchend", handleMove);
    document.addEventListener("touchstart", handleMove);
    document.addEventListener("touchcancel", handleMove);
    return () => {
      document.removeEventListener("click", handleMove);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", handleMove);
      document.removeEventListener("touchstart", handleMove);
      document.removeEventListener("touchcancel", handleMove);
    };
  });
}
export default useInterfaceClick;
