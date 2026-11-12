import { useCallback, useEffect, useMemo, useState } from 'react'
import type { AnimationStep, StructureState } from '../engine/structures/types'

interface AnimationStageProps {
  steps: AnimationStep[]
  render: (state: StructureState, maxSlotCount: number) => React.ReactNode
  onFrameChange?: (frameIndex: number, isLastFrame: boolean) => void
}

const SPEEDS = [0.5, 1, 2] as const
const BASE_INTERVAL_MS = 1200

/**
 * Generic scripted-animation playback controller: owns the current frame
 * index and exposes play/pause/step/speed. Frame 0 is the first step's
 * `beforeState`; frame N (N >= 1) is step N-1's `afterState`. Renderer is
 * injected via `render` so this same controller drives Stack now and
 * Array/LinkedList/Queue in later roadmap phases.
 */
export function AnimationStage({
  steps,
  render,
  onFrameChange,
}: AnimationStageProps) {
  const frames = useMemo(
    () => [
      steps[0]?.beforeState ?? { elements: [] },
      ...steps.map((step) => step.afterState),
    ],
    [steps],
  )
  const captions = useMemo(
    () => ['Starting point', ...steps.map((step) => step.description)],
    [steps],
  )
  const maxSlotCount = useMemo(
    () => Math.max(...frames.map((frame) => frame.elements.length), 1),
    [frames],
  )

  const [{ frameIndex, isPlaying }, setPlayback] = useState({
    frameIndex: 0,
    isPlaying: false,
  })
  const [speed, setSpeed] = useState<(typeof SPEEDS)[number]>(1)

  const atStart = frameIndex === 0
  const lastFrameIndex = frames.length - 1
  const atEnd = frameIndex === lastFrameIndex

  const stepForward = useCallback(() => {
    setPlayback((current) => {
      const nextFrame = Math.min(current.frameIndex + 1, lastFrameIndex)
      return {
        frameIndex: nextFrame,
        isPlaying: current.isPlaying && nextFrame < lastFrameIndex,
      }
    })
  }, [lastFrameIndex])

  useEffect(() => {
    onFrameChange?.(frameIndex, atEnd)
  }, [frameIndex, atEnd, onFrameChange])

  useEffect(() => {
    if (!isPlaying || atEnd) return
    const timer = setTimeout(stepForward, BASE_INTERVAL_MS / speed)
    return () => clearTimeout(timer)
  }, [isPlaying, atEnd, speed, frameIndex, stepForward])

  return (
    <div>
      {render(frames[frameIndex], maxSlotCount)}
      <p aria-live="polite">{captions[frameIndex]}</p>
      <div>
        <button
          type="button"
          onClick={() =>
            setPlayback((current) => ({
              ...current,
              frameIndex: Math.max(current.frameIndex - 1, 0),
            }))
          }
          disabled={atStart}
        >
          Step back
        </button>
        <button
          type="button"
          onClick={() =>
            setPlayback((current) => ({
              ...current,
              isPlaying: !current.isPlaying,
            }))
          }
          disabled={atEnd && !isPlaying}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={stepForward} disabled={atEnd}>
          Step forward
        </button>
        <label>
          Speed
          <select
            value={speed}
            onChange={(event) =>
              setSpeed(Number(event.target.value) as (typeof SPEEDS)[number])
            }
          >
            {SPEEDS.map((value) => (
              <option key={value} value={value}>
                {value}x
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  )
}
