/** @format */

import { CaretRightOutlined, LoadingOutlined, PauseOutlined } from '@ant-design/icons'
import { useCallback, useRef, useState } from 'react'
import { WaveForm, WaveSurfer } from 'wavesurfer-react'
import { LoadingContainer, PlayPauseButton } from './styled'

const PreviewAudio = ({ audioSrc, counter, btnMarRight }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isPlayerReady, setIsPlayerReady] = useState(false)

    const wavesurferRef = useRef()


    const handleWSMount = useCallback(waveSurfer => {
        waveSurfer.params.barWidth = 2
        waveSurfer.params.barHeight = 1
        waveSurfer.params.waveColor = '#e0e0e0'
        waveSurfer.params.progressColor = '#40a9ff'
        waveSurfer.params.cursorColor = '#777'

        wavesurferRef.current = waveSurfer

        if (wavesurferRef.current) {
            wavesurferRef.current.load(audioSrc)
            wavesurferRef.current.setCursorColor('transparent')

            wavesurferRef.current.on('ready', () => {
                waveSurfer.container = `waveform${counter}`
                console.log('WaveSurfer is ready')
                setIsPlayerReady(true)
            })

            wavesurferRef.current.on('loading', data => {
                console.log('loading --> ', data)
            })

            if (window) {
                window.surferidze = wavesurferRef.current
            }
        }
    }, [])

    const play = () => {
        wavesurferRef.current.playPause()

        wavesurferRef?.current.isPlaying() ? setIsPlaying(true) : setIsPlaying(false)
    }

    return (
        <>
            <PlayPauseButton btnMarRight={btnMarRight} onClick={play}>{isPlaying ? <PauseOutlined /> : <CaretRightOutlined />}</PlayPauseButton>
            <WaveSurfer onMount={handleWSMount}>
                <WaveForm id={`waveform${counter}`}></WaveForm>
            </WaveSurfer>
            {!isPlayerReady && (
                <LoadingContainer>
                    <LoadingOutlined />
                </LoadingContainer>
            )}
        </>
    )
}

export default PreviewAudio
