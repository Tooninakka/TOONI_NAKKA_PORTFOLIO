import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <h2>Front-End</h2>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <h2>Back-End</h2>
      <SkillList src={checkMarkIcon} skill="HTML" />
      <SkillList src={checkMarkIcon} skill="CSS" />
      <SkillList src={checkMarkIcon} skill="JavaScript" />
      <SkillList src={checkMarkIcon} skill="React" />
      <SkillList src={checkMarkIcon} skill="Python" />
      <SkillList src={checkMarkIcon} skill="Django" />
      <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
      <h2>Cloud</h2>
      <br />
      <SkillList src={checkMarkIcon} skill="HTML" />
      <SkillList src={checkMarkIcon} skill="CSS" />
      <SkillList src={checkMarkIcon} skill="JavaScript" />
      <SkillList src={checkMarkIcon} skill="React" />
      <SkillList src={checkMarkIcon} skill="Python" />
      <SkillList src={checkMarkIcon} skill="Django" />
      <SkillList src={checkMarkIcon} skill="SQL" />
      </div>
      <hr />
    </section>
  );
}

export default skills;
