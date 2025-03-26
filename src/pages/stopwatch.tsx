import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
const Stopwatch = () => {
 const [time, setTime] = useState(0)
 const [isRunning, setIsRunning] = useState(false)
 

    const startTimer = () => {                                  setIsRunning(true)     
    }

    const stopTimer = () =>{
        setIsRunning(false)
    }

    const resetTimer = () => {
        setTime(0)
        setIsRunning(false)
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined
        isRunning
            ? (interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10))
            : clearInterval(interval);
        return () => clearInterval(interval);
    }, [isRunning]);


    return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex bg-white shadow-md rounded-lg p-2 h-44 w-lg items-center justify-center flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Stopwatch</h1>
       
        <div className='text-2xl font-bold shadow-md border-1 border-black bg-transparent  p-4 w-full flex justify-center '>
        <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
        <span>{("0" + (time / 10) % 100)}:</span>
        </div>

        <div className='flex gap-2 mt-5 mb-5'>
        <Button onClick={startTimer}>Start</Button>
      
      {isRunning && <Button onClick={stopTimer}>Pause</Button>
      
      }
       
       <Button onClick={resetTimer}>Reset</Button>
        </div>
      
      
        </div>
    </div>
  )
}

export default Stopwatch