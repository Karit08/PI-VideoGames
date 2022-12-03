import React, { useReducer } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Detail from "../Detail/Detail";
import { getDetails } from "../../redux/actions/index"
import Spinner from "../../Spinner/Spinner";

export default function DetailContainer(){
    const { idVideogame } = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(state => state.detail);
    const loading = useSelector(state => state.loading);

    useEffect(()=>{
        dispatch(getDetails(idVideogame));
    },[dispatch]);

    return loading ? <Spinner/> :  <Detail details={detail} />
};