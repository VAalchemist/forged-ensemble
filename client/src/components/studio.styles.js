import tw from 'tailwind-styled-components'; 


export const Record = tw.img`
absolute
w-32
md:w-40
md:mb-12
mb-8
ml-2
rounded-full
hover:animate-spin
hover:ml-32
md:hover:ml-32
hover:duration-1000

`;

export const RecordTxt = tw.p`
text-red-500
text-center
font-semibold
md:text-sm
text-xs
md:mb-12
mb-8
md:ml-6
ml-8

`;

export const Controls = tw.button`

`;

export const SoundBoard = tw.div`
grid
grid-cols-4
gap-2 md:gap-4
lg:gap-6
bg-gray-600
bg-opacity-75
border-8
p-2
border-gray-800
rounded-xl

`;

export const SoundBoardBtns = tw(SoundBoard)`
  

`;


export const BeatPad = tw.button`
w-20
sm:w-32
md:w-36
lg:w-40 
h-20
sm:h-32
md:h-36
lg:h-40
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
