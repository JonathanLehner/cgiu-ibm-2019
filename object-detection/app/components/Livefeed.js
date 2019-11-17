import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import useWebcam from './useWebcam'
import useModel from './useModel'
import useBoxRenderer from './useBoxRenderer'

const MODEL_PATH = 'https://modelwebfire-d1z71pn98.now.sh'

export const Livefeed = () => {
  const videoRef = useRef()
  const canvasRef = useRef()

  const cameraLoaded = useWebcam(videoRef)
  const model = useModel(MODEL_PATH)
  useBoxRenderer(model, videoRef, canvasRef, cameraLoaded)

  return (
    <>
      <video
        style={{ position: 'fixed' }}
        autoPlay
        playsInline
        muted
        ref={videoRef}
        width="600"
        height="500"
      />
      <canvas
        style={{ position: 'fixed' }}
        ref={canvasRef}
        width="600"
        height="500"
      />
    </>
  )
}
