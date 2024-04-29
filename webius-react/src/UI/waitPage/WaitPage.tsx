import WaitSphereIcon from '@/assets/wait_sphere.webm';
import './waitSphere.css';
import styled from "styled-components";

const WaitPage = () => {
    return (
        <Container>
            <div className="text-light-text-constant-40-Medium">Пожалуйста, подождите</div>
            <video playsInline autoPlay muted loop>
                <source id="image-mainIcon" src={WaitSphereIcon} type="video/webm"/>
            </video>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

export default WaitPage;