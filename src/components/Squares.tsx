import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { shuffle } from 'lodash'

const COLORS = [
    "var(--red",
    "var(--blue",
    "var(--black",
    "var(--purp",
    "var(--green",
];

const Squares = () => {
    const [colorList, setColorList] = useState(COLORS);

    return (
        <div>
            <button onClick={() => setColorList(pState => shuffle(pState))}>shuffle</button>
            {colorList.map(color => (
                <motion.div
                     key={color}
                    positionTransition={{
                        damping: 50,
                        stiffness: 500
                    }}
                 
                    style={{
                        background: color,
                        height: 100,
                        width: 100
                    }}
                />
            ))
            }
        </div>
    )

}
export default Squares
