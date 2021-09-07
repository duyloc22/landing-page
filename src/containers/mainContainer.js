import { useState, useEffect } from "react";
import { Project } from "../components";

export function MainContainer() {
    const [publishedDeploy, setPublishedDeploy] = useState([]);

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
            console.log(data);
            data.forEach((element) => {
                setPublishedDeploy((prevState) => {
                    return [...prevState, element.published_deploy];
                });
            });
        };
        fetchNetlify();
    }, []);
    console.log(publishedDeploy);
    return (
        <Project.Container>
            {publishedDeploy.map((item, i) => {
                return (
                    <Project key={i}>
                        <Project.Link href={item.url} target="blank">
                            <Project.Img src={item.screenshot_url} alt={item.site_id} />
                        </Project.Link>
                        <Project.Title>{item.url.replace("https://", "").replace(".duyloc.dev", "")}</Project.Title>
                        <Project.Date>{item.created_at.substring(0, 10)}</Project.Date>
                    </Project>
                );
            })}
        </Project.Container>
    );
}
