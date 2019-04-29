import React from "react";

import style from "./MobileMenuBtn.module.css";

export default function MobileMenuBtn() {
  return (
    <div className={style.MobileMenuBtn}>
      <div className={style.Circle1} />
      <div className={style.Circle2} />
      <div className={style.Circle2} />
    </div>
  );
}
