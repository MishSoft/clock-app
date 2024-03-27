// import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

function MoreInfo({ checkIcon, setHandleInformation }) {
  return (
    <motion.div initial={false} animate={!checkIcon ? "open" : "closed"}>
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setHandleInformation()}
        className="more-info-button"
      >
        {checkIcon ? "More" : "Less"}
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
          className="icon"
        >
          <FaAngleDown />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}

export default MoreInfo;
