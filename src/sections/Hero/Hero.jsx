import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/dev_pic_1.jpeg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profle Picture of Tooni Nakka"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Tooni Nakka</h1>
        <h2>Python Full Stack Developer</h2>
        <br />
        <span>
          <a href="https://x.com/TNakka47297/" target="blank">
            <img className="hover" src={twitterIcon} alt="Twitter_Icon" />
          </a>

          <a href="https://www.linkedin.com/in/tooni-nakka/" target="blank">
            <img className="hover" src={linkedinIcon} alt="LinkedIn Icon" />
          </a>

          <a href="https://github.com/Tooninakka/" target="blank">
            <img className="hover" src={githubIcon} alt="Github Icon" />
          </a>
        </span>
        <br />
        <p className={styles.description}>
          With a Passion for designing and developing the web apps for the
          commerical business.
        </p>
        <br />
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
