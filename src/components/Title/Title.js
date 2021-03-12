import s from "./Title.module.css";
import icon from "../../image/icon.jpg";

const Title = () => {
  return (
    <>
      <div className={s.wrapper__img}>
        <img className={s.img} src={icon} width="30" height="30" alt="icon" />
        <h2 className={s.title}>Team adverum Announcements</h2>;
      </div>
    </>
  );
};

export default Title;
