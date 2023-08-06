import React from "react";
//import PropTypes from "prop-types";
import style from "./FeedBack.module.css";

class FeedBack extends React.Component { 
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    incrementGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
     };

    incrementNeutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
     };

    incrementBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
     };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const TotalCountFeedback = this.countTotalFeedback();
        return TotalCountFeedback ? Math.ceil((good / TotalCountFeedback) * 100) : 0;
    
     };

    render() {
        const TotalFeedBack = this.countTotalFeedback();
        const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
        return (
            <div class={style.container}>
                <h2>Please leave feedback</h2>
                <div class={style.button_list}>
                    <button type="button" class={style.button} onClick={this.incrementGoodFeedback}>Good</button>
                    <button type="button" class={style.button} onClick={this.incrementNeutralFeedback}>Neutral</button>
                    <button type="button" class={style.button} onClick={this.incrementBadFeedback}>Bad</button>
                </div>
                <div class={style.statistics} >
                    <h2>Statistics</h2>
                    <p class={style.name}>Good:<span class={style.counter_value} >{this.state.good}</span></p>
                    <p class={style.name}>Neutral:<span class={style.counter_value} >{this.state.neutral}</span></p>
                    <p class={style.name}>Bad:<span class={style.counter_value} >{this.state.bad}</span></p>
                    <p class={style.name}>Total:<span class={style.counter_value}>{TotalFeedBack}</span></p>
                    <p class={style.name}>Positive feedback:<span class={style.counter_value} >{PositiveFeedbackPercentage}%</span></p>
                </div>
            </div>
            )
        }
}

export default FeedBack;