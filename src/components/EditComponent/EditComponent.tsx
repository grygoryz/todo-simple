import React from "react";
import c from "./EditComponent.module.scss"
import EditForm, {EditFormValues} from "./EditForm/EditForm";
import {animated, useSpring, config} from "react-spring"
import {TaskType} from "../../types/types";

type Props = {
    onSubmit: (formData: EditFormValues) => void
    closeWindow: () => void
    editingTask: TaskType | null
}

const EditComponent: React.FC<Props> = ({onSubmit, closeWindow, editingTask}) => {
    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.className === c.container) closeWindow();
    };

    const fadeIn = useSpring({
        from: {opacity: 0},
        opacity: 1,
        config: {
            duration: 150
        }
    });

    const slideDown = useSpring({
        from: {transform: "translateY(-50px) translateX(-50%)"},
        transform: "translateY(0) translateX(-50%)",
        config: config.stiff
    });

    return (
        <animated.div style={fadeIn} onClick={onClick} className={c.container}>
            <animated.div style={slideDown} className={c.window}>
                <h2 className={c.title}>{editingTask? "Edit Task:" : "Add Task:"}</h2>
                <EditForm initialValues={editingTask} onSubmit={onSubmit} onCancel={closeWindow}/>
            </animated.div>
        </animated.div>
    )
};

export default EditComponent