import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    min-width: 300px;
    max-width: 500px;

    background-color: #30363d;
    border-radius: 1rem;
    padding: 20px;
    border: 2px solid #000;
    margin-bottom: 10px;

    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    p {
        font-size:16px;
        color: #FAFAFA60;
        margin-bottom:20px;
    }
    button.remover {
        background-color: transparent;
        border: 0;
        img{
            width: 32px;
            height: 32px;
        }
    }
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinkContainer = styled.div`
    background-color: #FAFAFA60;
    width: fit-content;
    padding: 4px 8px;
    border-radius: 1rem;
    
    a{
        color: #fff;
    }
`;
