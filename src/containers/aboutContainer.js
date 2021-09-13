import { About } from "../components";
import about from "../assets/about.svg";

export default function AboutContainer() {
    return (
        <About>
            <About.Wrapper svg>
                <About.Img src={about} alt="about" />
            </About.Wrapper>
            <About.Wrapper>
                <About.Title>About me</About.Title>
                <About.Text>Hi! My name is Duy Loc, a Front end developer base on Dallas, Texas. ✋</About.Text>
                <About.Text>
                    I create this website to share, organize and showcase my project. Most of project here is come from practice, web challenge or
                    bootcamp. You are free to clone it.
                </About.Text>
                <About.Text>If you like my work, you can star my github repo 😊, if you want to get in touch feel free to contact me. </About.Text>
            </About.Wrapper>
        </About>
    );
}
