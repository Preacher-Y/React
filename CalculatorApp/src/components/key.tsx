export default function Keys ({onKeyPress}:{onKeyPress:(key:string)=>void}):React.JSX.Element{
    const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  const getButtonStyle = (key:string) => {
    if (key === '=') {
      return 'bg-blue-500 hover:bg-blue-600 text-white col-span-2';
    }
    if (['÷', '×', '−', '+'].includes(key)) {
      return 'bg-orange-500 hover:bg-orange-600 text-white';
    }
    if (['C', '±', '%'].includes(key)) {
      return 'bg-gray-400 hover:bg-gray-500 text-black';
    }
    if (key === '0') {
      return 'bg-gray-200 hover:bg-gray-300 text-black col-span-2';
    }
    return 'bg-gray-200 hover:bg-gray-300 text-black';
  };

  return (
    <div className="grid grid-cols-4 gap-1 p-4 bg-gray-800 rounded-b-lg">
      {buttons.flat().map((key, index) => (
        <button
          key={index}
          onClick={() => onKeyPress(key)}
          className={`h-16 rounded-lg font-semibold text-xl transition-colors ${getButtonStyle(key)}`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}