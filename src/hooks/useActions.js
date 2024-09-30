import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { actions as favorites } from "../store/favoritesSlice/favoritesSlice";
import { actions as counter } from "../store/counterSlice/counterSlice";
import * as userActions from '../store/user/userActions'

const rootActions = {
    ...favorites,
    ...counter,
    ...userActions
}

function useAction() {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}

export default useAction;