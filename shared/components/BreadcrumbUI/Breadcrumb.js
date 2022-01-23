import styled from 'styled-components';

export default styled.div`
    font-weight:500;
    margin-left:10px;
    font-size: 14px;
    @media screen and (${props=>props.pixelsize}-width:${props=>props.width}px){
        display: none;
    }
`;