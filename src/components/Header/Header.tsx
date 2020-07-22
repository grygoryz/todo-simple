import React from "react";
import c from "./Header.module.scss"
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {useSpring, animated, config} from "react-spring";

type Props = {
    openEditWindow: () => void
}

const Header: React.FC<Props> = ({openEditWindow}) => {
    const slideDown = useSpring({
        from: {transform: "translateY(-100%) rotate(-3deg)"},
        transform: "translateY(0) rotate(0)",
        config: config.wobbly
    });

  return (
      <animated.div style={slideDown} className={c.container}>
          <div><PlusIcon onClick={openEditWindow} className={c.btn}/></div>
      </animated.div>
  )
};

export default Header