import { useReactMediaRecorder, ReactMediaRecorder, useScreenCapture } from "react-media-recorder";
import { useState, useEffect, useRef } from 'react';

const ScreenPreview = ({ stream }) => {
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

const ScreenView = () => {
    const [enable, setEnable] = useState(true)

    return (
        <div>
            <ReactMediaRecorder
                screen
                audio={false}
                blobPropertyBag={{
                    type: 'video/webm',
                }}
                askPermissionOnMount={true}
                render={({
                    previewStream,
                    status,
                    startRecording,
                    stopRecording,
                    mediaBlobUrl,
                }) => {
                    // console.log(previewStream);
                    return (
                        <div>
                            <p>Screen Share status: {status}</p>
                            <button onClick={startRecording}>Start Recording</button>
                            <button onClick={stopRecording}>Stop Recording</button>
                            {mediaBlobUrl && <video src={mediaBlobUrl} width={350} height={350} controls autoPlay loop />}
                            {enable && <ScreenPreview stream={previewStream} />}
                        </div>
                    );
                }}
            />
        </div>
    );
};

export default ScreenView

