import {useEffect, useState} from 'react'
import VideoView from 'components/VideoView'
import ScreenView from 'components/ScreenView'
import screenfull from 'screenfull'

const Dashboard = () => {
  const [interviewStarted, setInterviewStarted] = useState(false)

  useEffect(() => {
    if(screenfull.isEnabled){
      screenfull.on('change', ()=>{
        console.log("Am I full screen?", screenfull.isFullscreen? 'yes': 'no')
      })
    }
    function handleTabBlur() {
      console.log('User has switched focus away from this tab');
      // Perform any other actions you need here
    }

    window.addEventListener('blur', handleTabBlur);

    return () => {
      window.removeEventListener('blur', handleTabBlur);
    };

  }, []);

  const startInterview = () => {
    setInterviewStarted(true)
    screenfull.toggle()
  }

  const stopInterview = () => {
    setInterviewStarted(false)
    screenfull.toggle()
  }

  return (
    <>
      <button onClick={()=>{
        interviewStarted ? stopInterview(): startInterview(); 
      }}>{`${interviewStarted ? 'End' : 'Start'} Interview`}</button>
        <VideoView interviewStarted={interviewStarted}/>
        <ScreenView interviewStarted={interviewStarted} />
    </>
  )
}

export default Dashboard