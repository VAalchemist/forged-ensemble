import styled from "styled-components";
import tw from 'tailwind-styled-components'; 


export const HomeD = styled.button`
object-fit: fill;
    border-radius: 10px;
    /* padding: 0.3rem 1rem; */
    border: 3px solid white;
    transition: all 0.5s ease;
    /* background: black; */
    font-weight: bold;
    z-index: -1;
    opacity: 80%;
&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1px #ff006e,
                0 0 10px #ff006e,
                0 0 15px #ff006e,
                0 0 25px #ff006e,
                0 0 30px #ff006e;
}
    cursor: pointer;`

export const BeatPad = tw.button`
w-36
sm:w-40
md:w-40
h-28
sm:h-36
md:h-36
lg:h-36
shadow-2xl
shadow-orange-100
pb-full
rounded-xl
hover:ring-8
hover:duration-500
active:duration-500
`;

export const BlueBeatPad = tw(BeatPad)`
bg-[#00dfff]
hover:ring-cyan-600
hover:bg-[#9ae7f2]
`;

export const OrangeBeatPad = tw(BeatPad)`
bg-[#ff8f00]
hover:ring-orange-500
hover:bg-[#ebc694]
`;


export const PinkBeatPad = tw(BeatPad)`
bg-[#FC77EB]
hover:ring-pink-500
hover:bg-[#f5a2ea]
`;

export const GreenBeatPad = tw(BeatPad)`
bg-[#36EB42]
hover:ring-green-600
hover:bg-[#84f48b]
`;