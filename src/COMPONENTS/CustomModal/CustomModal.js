import React, { useState } from "react";

const CustomModal = () => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggleModal = () => {
    setToggleModal(!toggleModal);
  };
  return <div></div>;
};

export default CustomModal;
