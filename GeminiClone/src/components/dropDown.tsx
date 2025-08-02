import { useState, useRef, useEffect } from 'react';
import { FaCaretDown } from "react-icons/fa";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('2.5 Flash');
  const menuRef = useRef<HTMLDivElement>(null);

  const options = [
    { name: 'Fast all-around help', version: '2.5 Flash', label: 'New' },
    { name: 'Reasoning, math & code', version: '2.5 Pro', label: 'New' },
    { name: 'Upgrade to Google AI Pro', version: 'Get our most capable models & features', action: 'Upgrade' },
  ];

  const handleSelect = (version:string):void => {
    setSelected(version);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e:MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#282A2C] text-gray-400 flex items-center gap-1 text-[16px] px-2.5 py-1 rounded-full shadow focus:outline-none"
      >
        {selected}
        <FaCaretDown/>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-82 rounded-lg shadow-lg bg-[#282A2C] py-3 text-gray-100">
          <span className="text-base text-gray-400 m-4">Choose your model</span>
          <div className="mt-2 space-y-2">
            {options.map((opt, idx) => (
              <div key={idx} className="flex items-center justify-between px-4 py-1 hover:bg-gray-600/30 cursor-pointer" onClick={() => handleSelect(opt.version)}>
                <div className='pr-6'>
                  <p className="text-[14px] font-medium">{opt.name}</p>
                  <p className="text-[13px] text-gray-400">{opt.version}</p>
                </div>
                {opt.label && (
                  <span className="bg-blue-300 px-2 py-0.5 rounded-full text-blue-900  text-base font-bold">{opt.label}</span>
                )}
                {opt.action && (
                  <button className="bg-gray-600 px-3 py-1 rounded-full text-base font-medium hover:bg-gray-500">{opt.action}</button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
