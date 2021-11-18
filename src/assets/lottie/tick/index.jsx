import Lottie from 'react-lottie';
import tick from './40401-tick.json';

const Tick = ({ autoplay = false, loop = false, ...props }) => {
    return (
        <Lottie
            {...props}
            options={
                {
                    loop: loop,
                    autoplay: autoplay,
                    animationData: tick,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }
            }
        />
    )
}

export default Tick;