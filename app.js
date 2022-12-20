const handleOnClickAnchor = (event) => {
  if (event.target.nodeName === "BUTTON") return;

  console.log(event.target.nodeName);
};
