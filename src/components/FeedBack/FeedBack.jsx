import React from "react";
//import PropTypes from "prop-types";
import style from "./FeedBack.module.css";

const FeedBack = () => <div>
    <h2>Please leave feedback</h2>
    <div class={style.button_list}>
        <button class={style.button}>Good</button>
        <button class={style.button}>Neutral</button>
        <button class={style.button}>Bad</button>
    </div>
</div>


export default FeedBack;