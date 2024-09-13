
import { IntersectionContext } from '@/contexts/intersection-context';
import { useContext } from 'react';

function useIntersection() {
    const context = useContext(IntersectionContext)

    return context
}

export default useIntersection;