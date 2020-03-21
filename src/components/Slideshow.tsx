import React, { useState } from 'react'
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import COLORS from '../colors';
import { wrap } from '@popmotion/popcorn'

const variants = {
    enter: {
        x: 1000,
        opacity: 0,
    },
    center: {
        x: 0,
        opacity: 1,
    },
    exit: {
        x: -1000,
        opacity: 0,
    }
}

const Slideshow = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const paginate = (direction: 1 | -1) => setPage([page + direction, direction]);
    const i = wrap(0, COLORS.length, page);

    return (
        <div style={{position: "relative" ,height: 400}}>
            <AnimatePresence>
                <motion.div
                    key={page}
                    style={{
                        height: 400,
                        width: "100%",
                        background: COLORS[page],
                        position: "absolute",
                        left: 0,
                        top: 0

                    }}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e: MouseEvent, { offset, velocity }: PanInfo) => {
                        if (offset.x > 400) {
                            paginate(1)
                        } else {
                            paginate(-1)
                        }
                    }}
                />
            </AnimatePresence>

        </div>
    )
}

export default Slideshow
