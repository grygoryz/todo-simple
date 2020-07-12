import {connect} from "react-redux";
import App from "./App";

const mapStateToProps = (state) => {
    return {
        editMode: state.app.editMode,
        editingTask: state.tasks.editingTask
    }
};

export default connect(mapStateToProps)(App);