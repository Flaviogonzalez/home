
import React, { CSSProperties, useMemo, useState } from 'react';
import useInterceptionFrames from '@/hooks/use-interception-frames';
import useFrames from '@/hooks/use-frames';


const Index: React.FC = () => {
  const [activate, setActivate] = useState(false)
  const frames = useMemo<CSSProperties[]>(() => [
    { width: '100%', height: '0%', transition: 'all 3s ease-in-out' },
    { width: '100%', height: '75%', transition: 'all 3s ease' },
  ], []);
  const {ref, isIntersecting, style} = useInterceptionFrames(frames, true, 500)

  return (
    <div className='h-screen'>
      <div ref={ref} style={isIntersecting ? style : {}} className=' bg-red-500 h-screen'/>
    </div>
  )
};

export default Index;
