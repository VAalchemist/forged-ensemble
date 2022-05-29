import tw from 'tailwind-styled-components'; 


export const Record = tw.img`
w-32
md:w-40
rounded-full
`;

export const RecordTxt = tw.p`
text-red-500
text-xs
md:text-sm
font-semibold
ml-16
md:ml-20
mt-12
md:mt-20
`;

export const Controls = tw.button`
hover:border-b
hover:border-teal-200
hover:text-teal-300
rounded-full
hover:shadow-2xl
hover:shadow-indigo-600
active:text-lime-500
p-1
md:p-4  
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

export const SoundBoardBtns = tw.div`
flex
flex-col
sm:flex-row
sm:justify-center
border-4
border-gray-800
bg-gray-600
bg-opacity-40
rounded-xl
m-2
sm:w-2/4
text-purple-900
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
shadow-indigo-300
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
