import WaitSphereIcon from '@/assets/wait_sphere.webm';
import './waitSphere.css';

const WaitPage = () => {
    return (
        <div>
            <div className="title text-light-text-constant-40-Medium">Пожалуйста, подождите</div>
            <div className="mainIcon">
                <video playsInline autoPlay muted loop>
                    <source id="image-mainIcon" src={WaitSphereIcon} type="video/webm"/>
                </video>
            </div>
        </div>
    );
};

export default WaitPage;