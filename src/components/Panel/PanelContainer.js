import {connect} from "react-redux";
import Panel from "./Panel";
import {setSortingMethod, setVisibilityFilter} from "../../redux/showing-reducer";

const mapStateToProps = (state) => {
    return {
        visibilityFilter: state.showing.visibilityFilter,
        sortingMethod: state.showing.sortingMethod
    }
};

const dispatches = {setVisibilityFilter, setSortingMethod};

export default connect(mapStateToProps, dispatches)(Panel);