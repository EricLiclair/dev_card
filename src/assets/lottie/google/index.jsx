import Lottie from 'react-lottie';
import google from './google.json'

const GoogleIcon = ({ ...props }) => {
    return (
        <Lottie
            {...props}
            height={40}
            options={
                {
                    loop: true,
                    autoplay: true,
                    animationData: google,
                    rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                    }
                }
            }
        />
    )
}

export default GoogleIcon;