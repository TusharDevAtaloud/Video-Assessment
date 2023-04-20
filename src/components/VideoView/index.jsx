import { useReactMediaRecorder } from "react-media-recorder";
import {useState, useEffect, useRef } from 'react';

const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return <video ref={videoRef} width={300} height={300} autoPlay controls />;
};

const VideoView = ({interviewStarted}) => {    
    const [enablePreview, setEnablePreview] = useState(true);
    const [enableAudio, setEnableAudio] = useState(true);

    const { previewStream, status, startRecording, stopRecording, mediaBlobUrl } =
        useReactMediaRecorder({
            // screen: true, 
            audio: enableAudio, 
            video: true,
            askPermissionOnMount: true,
            blobPropertyBag: {
                type: 'video/webm',
            }
        });

    useEffect(() => {
        if(interviewStarted){
            startRecording()
        }
        else{
            stopRecording()
        }
    }, [interviewStarted])
    const handleToggleAudio = () => {
        setEnableAudio(!enableAudio);
    }

    return (
        <>
        {console.log(previewStream)}
            <div>
                <p>Video Recording status: {status}</p>
                {/* <button onClick={startRecording}>Start Recording</button> */}
                {/* <button onClick={stopRecording}>Stop Recording</button> */}
                {/* <button onClick={handleToggleAudio}>
                    {enableAudio ? 'Disable' : 'Enable'} Audio
                </button> */}
                {mediaBlobUrl && <video src={mediaBlobUrl} width={350} height={350} controls autoPlay loop />}
                {enablePreview && <VideoPreview stream={previewStream} />}
            </div>
        </>
    );
};

export default VideoView

