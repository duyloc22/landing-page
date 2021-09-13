import { useState, useEffect } from "react";
import { Project } from "../components";
import moment from "moment";
import Github from "../assets/Github.svg";
import defaultImg from "../assets/defaultImg.svg";

export function MainContainer() {
    const [publishedDeploy, setPublishedDeploy] = useState([]);
    const [hoverIndex, setHoverIndex] = useState(-1);

    useEffect(() => {
        const fetchNetlify = async () => {
            const res = await fetch("https://api.netlify.com/api/v1/sites", {
                method: "GET",
                headers: {
                    Authorization: "Bearer PM29Ua_4M_WO4HzB4ISTVz8P_m6Hprrmv09o6LW2WJ0",
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            data.forEach((element) => {
                setPublishedDeploy((prevState) => {
                    return [...prevState, element.published_deploy];
                });
            });
        };
        fetchNetlify();
    }, []);
    return (
        <Project.Container>
            {publishedDeploy
                ? publishedDeploy
                      .filter((p) => p.url !== "https://duyloc.dev")
                      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                      .map((item, i) => {
                          return (
                              <Project key={i} onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(-1)}>
                                  <Project.Link href={item.url} target="blank">
                                      <Project.Img src={item.screenshot_url ? item.screenshot_url : defaultImg} alt={item.site_id} />
                                  </Project.Link>
                                  <Project.Info>
                                      <Project.Div>
                                          <Project.Title>{item.url.replace("https://", "").replace(".duyloc.dev", "")}</Project.Title>
                                          <Project.Date>{moment(item.created_at).format("LL")}</Project.Date>
                                      </Project.Div>
                                      <Project.Link target="blank" href={item.commit_url && item.commit_url.split("/").slice(0, -2).join("/")}>
                                          <Project.Icon style={i === hoverIndex ? { display: "block" } : null} src={Github} alt="Github" />
                                      </Project.Link>
                                  </Project.Info>
                              </Project>
                          );
                      })
                : null}
        </Project.Container>
    );
}
