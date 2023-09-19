import React from "react";
import './sunglass.css';
import Watch from "./Watch/Watch";
import { add, multiply, divideTheFirstNumberByTheSecondNumber as divide} from "../../src/Utils/calculate";

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second);
    const mult = multiply(first, second);
    const vaag = divide(first, second)
    return (
        <div>
            <Watch></Watch>
            
        </div>
    );
};

export default Sunglass;