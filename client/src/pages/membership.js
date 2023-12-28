import { Container, Sidebar, Content } from "./styles/membership_styles.js";
import { Nav } from "./styles/login_styles";

import { FoundingDeclaration, Constitution, FoundingSpeech, Settlements, Case, Controller, ControllerSwitch} from "../components/Membership";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Membership() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const [page, setPage] = useState(useQuery().get("page"));
  const [controllerData, setControllerData] = useState(null);

  useEffect(() => {
        ControllerSwitch(page, setControllerData);
  }, [page]);

  const Pages = ()=>{
    switch (page) {
        case "constitution":
          return <Constitution />
        case "settlements":
          return <Settlements />
        case "speech":
          return <FoundingSpeech />
        case "case":
          return <Case />
        default:
          return <FoundingDeclaration />
      }
  }
  return (
    <>
      <Nav isDarkTheme={false} withShadow={false} />
      <Container>
        <Sidebar visible={window.innerWidth >= 769}>
          <ul>
            <li onClick={()=> setPage("")} className={!page && "active"}>The Founding Declaration</li>
            <li onClick={()=> setPage("constitution")} className={page === "constitution" && "active"}>
              The Constitution
            </li>
            <li onClick={()=> setPage("settlements")} className={page === "settlements" && "active"}>
              The Chamber of Settlements
            </li>
            <li onClick={()=> setPage("speech")} className={page === "speech" && "active"}>
              The Founding Speech
            </li>
            <li onClick={()=> setPage("case")} className={page === "case" && "active"}>The Case</li>
          </ul>
        </Sidebar>
        <Content>
          <Pages />
          <Controller
            link1={controllerData && controllerData.link1}
            link2={controllerData && controllerData.link2}
          />
        </Content>
      </Container>
    </>
  );
}

export default Membership;
