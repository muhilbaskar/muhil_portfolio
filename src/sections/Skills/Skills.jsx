import styles from './SkillsStyles.module.css';
import CheckMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={CheckMarkIcon} skill="HTML" />
        <SkillList src={CheckMarkIcon} skill="CSS" />
        <SkillList src={CheckMarkIcon} skill="JavaScript" />
        <SkillList src={CheckMarkIcon} skill="TypeScript" />
        <SkillList src={CheckMarkIcon} skill="Node.Js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={CheckMarkIcon} skill="React.Js" />
        <SkillList src={CheckMarkIcon} skill="Bootstrap" />
        <SkillList src={CheckMarkIcon} skill="Tailwind CSS" />
        <SkillList src={CheckMarkIcon} skill="Express.Js" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={CheckMarkIcon} skill="Redux" />
        <SkillList src={CheckMarkIcon} skill="Webpack" />
        <SkillList src={CheckMarkIcon} skill="Git & GitHub" />
        <SkillList src={CheckMarkIcon} skill="MongoDB" />
        <SkillList src={CheckMarkIcon} skill="SQL" />
      </div>
    </section>
  );
}

export default Skills;
