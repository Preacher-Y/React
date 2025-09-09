import { useState, type ChangeEvent } from "react";

const TouchTypingApp = () => {
  const sentence = "The quick brown fox jumps over the lazy dog.";
  const [userInput, setUserInput] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const isCorrect = sentence.split('').map((char, index)=> userInput[index] === char && true);
  const isWrong = sentence.split('').map((char, index)=> userInput[index] !== char && false);

  const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
      setUserInput(e.target.value)
    setIsCompleted(userInput.length / sentence.length===1)
  };
  const resetApp = () => {
    setUserInput('')
    setIsCompleted(false)
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Touch Typing App
      </h1>

      {/* Target sentence display */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg text-gray-700 font-mono">
          {sentence.split("").map((char, index) => (
            <span
              key={index}
              className={`
                ${
                  index < userInput.length
                    ? userInput[index] === char
                      ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                    : index === userInput.length
                    ? "bg-yellow-200"
                    : "text-gray-600"
                }
              `}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      {/* Input field */}
      <div className="mb-6">
        <input
          type="text"
          value={userInput}
          onChange={(e)=>handleInputChange(e)}
          placeholder="Start typing the sentence above..."
          className="w-full p-4 text-lg border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none font-mono"
          disabled={isCompleted}
        />
      </div>

      {/* Status display */}
      <div className="mb-6 text-center">
        {isCompleted ? (
          <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-2xl font-bold text-green-800">
              🎉 Congratulations! 🎉
            </p>
            <p className="text-green-700 mt-2">
              You've completed the sentence perfectly!
            </p>
          </div>
        ) : userInput.length === 0 ? (
          <p className="text-gray-500 text-lg">Start typing to begin...</p>
        ) : isCorrect ? (
          <div className="p-3 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-xl font-semibold text-green-800">Correct</p>
          </div>
        ) : isWrong ? (
          <div className="p-3 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-xl font-semibold text-red-800">Wrong</p>
            <p className="text-red-600 text-sm mt-1">
              Delete the incorrect character to continue
            </p>
          </div>
        ) : null}
      </div>

      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>
            {userInput.length} / {sentence.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-300"
            style={{ width: `${(userInput.length / sentence.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {(isCompleted || userInput.length > 0) && (
        <div className="text-center">
          <button
            onClick={resetApp}
            className="px-6 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default TouchTypingApp;