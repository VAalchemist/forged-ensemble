import styled from "styled-components";

export const Text = styled.textarea`
/* margin: 0 auto; */
    object-fit: fill;
    border-radius: 10px;
    /* padding: 0.3rem 1rem; */
    border: 3px solid white;
    transition: all 0.5s ease;
    /* background: black; */
    font-weight: bold;
    z-index: -1;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e,
                    0 0 30px #ff006e;
    }
        cursor: pointer;
`
export const Input = styled.input`
/* margin: 0 auto; */
    object-fit: fill;
    border-radius: 10px;
    /* padding: 0.3rem 1rem; */
    border: 3px solid white;
    transition: all 0.5s ease;
    /* background: black; */
    font-weight: bold;
    z-index: -1;
    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e,
                    0 0 30px #ff006e;
    }
        cursor: pointer;
`
export const Thanks = styled.div`
    /* display: none; */
`