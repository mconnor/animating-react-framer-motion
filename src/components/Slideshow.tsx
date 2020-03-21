import React, { useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import COLORS from '../colors';
import { wrap } from '@popmotion/popcorn'

type RightOrLeft = 1 | -1 | 0;

const variants = {
    enter: (direction: RightOrLeft) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: RightOrLeft) =>{ 
        return ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0
        })}
};

const Slideshow = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const paginate = (direction:RightOrLeft) =>{ 
        setPage([page + direction, direction])
    };
    const _index = wrap(0, COLORS.length, page);

    return (
        <div style={{ position: "relative", height: 400 }}>
            {/* dynamic varient */}
            <AnimatePresence custom={direction}>
                <motion.div
                    style={{
                        height: 400,
                        width: "100%",
                        background: COLORS[_index],
                        position: "absolute",
                        left: 0,
                        top: 0

                    }}
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e: MouseEvent, { offset, velocity }: PanInfo) => {
                        if (offset.x > 400) {
                            paginate(-1)
                        } else  if (offset.x < -400) {
                            paginate(1)
                        }
                    }}
                />
            </AnimatePresence>

        </div>
    )
}

export default Slideshow
