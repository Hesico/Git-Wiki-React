import styled from "styled-components";

export const InputContainer = styled.div`
    height: 40px;
    width: 80%;
    max-width: 350px;
    min-width: 270px;
    border: 2px solid #30363D;
    display:flex;
    border-radius: 1rem;
    margin: 20px;

    input {
        width: 100%;
        border: 0;
        border-radius: 1rem;
        background-color: transparent;
        padding-left: 10px;

        color: #FFF;
        font-size: 18px;

        &:focus {
            outline-width: 0;
        }
        
    }

    button {
        position: relative;
        padding: 5px 10px 5px 5px;
        margin-right: 3px;
        width: 40px;
        background-color: transparent;
        border: 0;

        img {
            height: 30px;
            width: 30px;
        }

        &:hover {
            filter: brightness(1.75);
            cursor: pointer; 
            -webkit-filter: drop-shadow(0 0 5px #FF3B27);
            filter: drop-shadow(0 0 7px #FF3B27);
        }
    }
`;