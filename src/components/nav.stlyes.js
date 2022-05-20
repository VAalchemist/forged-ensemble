import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavItem = styled(Link)`
margin: 0 auto;
    object-fit: fill;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    border: 3px solid #00bdff;
    transition: all 0.3s ease;
    /* background: black; */
    color: #fcacf2;
    font-weight: bold;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e,
                    0 0 30px #ff006e;
    }
        cursor: pointer;
`

export const LogOut = styled.button`
margin: 0 auto;
    object-fit: fill;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    border: 3px solid #00bdff;
    transition: all 0.3s ease;
    color: #fcacf2;
    font-weight: bolder;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e;
                    /* 0 0 30px #4af626; */
    }
        cursor: pointer;
`
export const Li = styled.li`
/* margin: 0 auto; */
    object-fit: fill;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    border: 3px solid #00bdff;
    transition: all 0.3s ease;
    color: #fcacf2;
    font-weight: bolder;
    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e;
                    /* 0 0 30px #4af626; */
    }
        cursor: pointer;
`

export const Ham = styled.div`
object-fit: fill;
    border-radius: 10px;
    padding: 0.3rem .7rem;
    border: 3px solid #00bdff;
    transition: all 0.3s ease;
 color: #fcacf2;
 :hover {
        transform: scale(1.1);
        box-shadow: 0 0 1px #ff006e,
                    0 0 10px #ff006e,
                    0 0 15px #ff006e,
                    0 0 25px #ff006e;
                    /* 0 0 30px #4af626; */
    }
        cursor: pointer;
`