import {connect} from "react-redux";
import Panel from "./Panel";
import {ShowingActions, SortingMethodsType, VisibilityFiltersType} from "../../redux/showing-reducer";
import {AppState} from "../../redux/redux-store";

const mapStateToProps = (state: AppState) => {
    return {
        visibilityFilter: state.showing.visibilityFilter,
        sortingMethod: state.showing.sortingMethod
    }
};

const dispatchProps = {
    setVisibilityFilter: ShowingActions.setVisibilityFilter,
    setSortingMethod: ShowingActions.setSortingMethod
};

export default connect<MapStateProps, MapDispatchProps, {}, AppState>(mapStateToProps, dispatchProps)(Panel);

type MapStateProps = {
    visibilityFilter: VisibilityFiltersType
    sortingMethod: SortingMethodsType
}

type MapDispatchProps = {
    setVisibilityFilter: (filter: VisibilityFiltersType) => void
    setSortingMethod: (method: SortingMethodsType) => void
}