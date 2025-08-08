import { useOpenContext } from "../hooks/openContext";
import { useOpen2Context } from "../hooks/open2Context";
import clsx from "clsx";

export default function Settings() {
    const { isOpen } = useOpenContext();
    const { isOpen2 } = useOpen2Context();
    return (
        <button className={clsx("text-gray-300 z-50 absolute bottom-0 mb-4 mx-4 px-2 py-2 flex items-center gap-2 truncate hover:bg-gray-500/20 cursor-pointer rounded-full",{
          "w-[88%]": isOpen&&!isOpen2,
          "":isOpen2&&!isOpen,
        })}>
              <span className="icon-[clarity--settings-solid] cursor-pointer text-[21px]" />
              {!isOpen2 && isOpen && <span className="truncate">Settings & Help</span>}
        </button>
    )
}