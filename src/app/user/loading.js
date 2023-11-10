'use client'
import React,{useEffect,useState} from 'react';
import LoadingBar from 'react-top-loading-bar'
const Loader = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        setProgress(100)
     
    }, []);
  return (
    <div>
        <LoadingBar
        color='#f11946'
        progress={progress}
        waitingTime={100}
        onLoaderFinished={() => setProgress(0)}
      />
    </div>
  );
}

export default Loader;
