import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import "./StyledSlider.scss";

const StyledSlider = styled(ReactSlider)`
    width: 95%;
    height: 2px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #00284c;
    color: #00284c;
    border-radius: 50%;
    cursor: grab;
    position: absolute;
    top: -11px;
`;

const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${(props) =>
        props.index === 2
            ? "#b5b5b5"
            : props.index === 1
            ? "#00284c"
            : "#b5b5b5"};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

export default () => (
    <StyledSlider
        defaultValue={[10, 75]}
        renderTrack={Track}
        renderThumb={Thumb}
    />
);
