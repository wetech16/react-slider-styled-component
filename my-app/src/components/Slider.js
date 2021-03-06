import React, {useState} from 'react';
import styled from 'styled-components';


const sliderThumbStyles = (props) => (`
  width: 25px;
  height: 25px;
  background: ${props.color};
  cursor: pointer;
  outline: 5px solid #333;
  opacity: ${props.opacity};
  -webkit-transition: .2s;
  transition: opacity .2s;
`);

const Styles = styled.div`
  display: flex;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export default (props) => {
    const [value, setValue] = useState(0)
    return(
        <Styles opacity={value > 10 ? (value / 255) : .1} color={props.color}>
            <input className="slider" type="range" min={0} max={255} value={value} 
            onChange={
                (e) => {
                    setValue(e.target.value);
                    props.handleUpdateColor(props.hexColor, e.target.value);
                }
            } />
            <div className="value">{value}</div>
        </Styles>
    )
}