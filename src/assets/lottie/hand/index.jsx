import Lottie from 'react-lottie';
import hand from './80604-hand.json';

const Hand = ({ ...props }) => {
    return (
        <Lottie
            {...props}
            options={
                {
                    loop: true,
                    autoplay: true,
                    animationData: hand,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }
            }
        />
    )
}

export default Hand;