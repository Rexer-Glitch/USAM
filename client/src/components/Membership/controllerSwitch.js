function ControllerSwitch(currentPage, setControllerData) {
  switch (currentPage) {
    case "constitution":
      setControllerData({
        link2: {
          to: "/membership?page=settlements",
          name: "Chamber of Settlements",
        },
        link1: {
          to: "/membership",
          name: "The Founding Declaration",
        },
      });
      break;
    case "settlements":
      setControllerData({
        link2: {
          to: "/membership?page=speech",
          name: "The Founding Speech",
        },
        link1: {
          to: "/membership?page=constitution",
          name: "The Constitution",
        },
      });
      break;
    case "speech":
      setControllerData({
        link2: {
          to: "/membership?page=case",
          name: "The Case",
        },
        link1: {
          to: "/membership?page=settlements",
          name: "Chamber of Settlements",
        },
      });
      break;
    case "case":
      setControllerData({
        link2: {
          to: "/signup",
          name: "Want to become a member?",
        },
        link1: { to: "/membership?page=speech", name: "The Founding Speech" },
      });
      break;
    default:
      setControllerData({
        link1: null,
        link2: {
          to: "/membership?page=constitution",
          name: "The Constitution",
        },
      });
      break;
  }
}

export default ControllerSwitch;