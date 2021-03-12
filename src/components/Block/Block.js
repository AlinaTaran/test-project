import s from "./Block.module.css";
import like from "../../image/like.png";
import online from "../../image/user.png";

const Block = () => {
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.img_online} src={online} alt="" />
        <span className={s.span}></span>

        <div>
          <h4 className={s.title}>
            Samantha Ordaz <span className={s.date}>1/22</span>
            <span className={s.time}>3:52 PM</span>
          </h4>
          <div className={s.btn__wrapper}>
            <button className={s.btn}>
              <img
                className={s.img}
                src={like}
                alt="icon"
                width="20"
                height="20"
              />
            </button>
            <p className={s.counter}>12</p>
          </div>
          <p className={s.text}>
            Hey{" "}
            <a href="#" className={s.text__subtitle}>
              General
            </a>
            ! Welcome to the new Adverum announcements page!! This page will be
            used for company wide announcements, reminders, or updates. All of
            yo are also welcome to post questions, notes, or anything else!
          </p>
          <a className={s.more} href="#">
            See more
          </a>
        </div>
        <a className={s.footer} href="#">
          3 replies from Avi, Alexa, and Harshil
        </a>
      </div>
      <a className={s.link} href="#">
        See more Announcemente &#8594;
      </a>
    </>
  );
};

export default Block;
