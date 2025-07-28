import { useToggleHoldContext } from "./hooks/context";

export default function Dices({
  value,
  isHeld,
  id,
  isDisabled,
}: {
  value: number;
  isHeld: boolean;
  id: string;
  isDisabled: boolean;
}) {
    
  const toggleHold = useToggleHoldContext()
  const dotPositions: { [key: number]: number[] } = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  return (
    <button
      disabled={isDisabled}
      onClick={() => toggleHold(id)}
      className={`${isHeld ? "bg-green-400 hover:bg-green-800" : "bg-gray-100 hover:bg-green-500"} ${isDisabled ? "cursor-not-allowed" : ""} w-12 h-12 pl-2 pt-2 text-center rounded drop-shadow-[0px_0px_2px_gray] grid grid-cols-3 grid-rows-3 gap-[2px] p-[3px]`}>
      {Array.from({ length: 9 }).map((_, i) => (
        <span
          key={i}
          className={`w-[6px] h-[6px] rounded-full ${
            dotPositions[value].includes(i) ? "bg-black" : ""
          }`}
        ></span>
      ))}
    </button>
  );
}
