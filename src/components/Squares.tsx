import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { shuffle } from 'lodash'
import COLORS from '../colors'

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
