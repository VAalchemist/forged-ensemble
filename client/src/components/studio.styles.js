import tw from 'tailwind-styled-components'; 


export const BeatPad = tw.div`
w-28
sm:w-40
md:w-full
h-28
sm:h-36
md:h-60
lg:h-72
shadow-2xl
shadow-orange-100
pb-full
rounded-xl
hover:duration-500
`;

export const BlueBeatPad = tw(BeatPad)`
bg-[#00dfff]
hover:ring-8
hover:ring-cyan-600
hover:bg-[#9ae7f2]
`;

export const OrangeBeatPad = tw(BeatPad)`
bg-[#ff8f00]
hover:ring-8
hover:ring-orange-500
hover:bg-[#ebc694]
`;


export const PinkBeatPad = tw(BeatPad)`
bg-[#FC77EB]
hover:ring-8
hover:ring-pink-500
hover:bg-[#f5a2ea]
`;

export const GreenBeatPad = tw(BeatPad)`
bg-[#36EB42]
hover:ring-8
hover:ring-green-600
hover:bg-[#84f48b]
`;

