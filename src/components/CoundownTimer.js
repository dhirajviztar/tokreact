import React from "react";

import Countdown from 'react-countdown';

function CoundownTimer() {
    return ( <>
        <Countdown date={new Date('2021-10-10')} className="countdown h3 " /> 
        </>
  );
}

export default CoundownTimer;
