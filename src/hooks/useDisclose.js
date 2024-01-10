import { useState } from "react";

const useDisclouse = () => {
  const [showmodal, setshowmodal] = useState(false);

  const ModalON = () => {
    setshowmodal(true);
  };
  const ModalOFF = () => {
    setshowmodal(false);
  };
  return { ModalOFF, ModalON, showmodal };
};

export default useDisclouse;