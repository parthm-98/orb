import { Particle } from "./particle";

export function Orb(){
    const particles = Array.from({length: 15});
    return(        
        <div className="flex items-center justify-center">
            <div className="orb">
                <div className="orb-inner-layer-1"></div>
                <div className="orb-inner-layer-2"></div>
                <div className="orb-inner-layer-3"></div>
                <div className="orb-inner-layer-4"></div>
                <div className="orb-inner-layer-5"></div>
                <div className="orb-inner-layer-6"></div>
                <div className="orb-inner-layer-7"></div>
                {particles.map((_, index) => (
                    <Particle key={index} />
                ))}
            </div>
        </div>
)}