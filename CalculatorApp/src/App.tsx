import Header from './components/header';
import React from 'react';
import Results from './components/results';
import Keys from './components/key';

function App() {
  const [display, setDisplay] = React.useState('0');
  const [expression, setExpression] = React.useState('');
  const [previousValue, setPreviousValue] = React.useState<number|null>(null);
  const [operation, setOperation] = React.useState<string|null>(null);
  const [waitingForValue, setWaitingForValue] = React.useState(false);

  const handleKeyPress = (key:string) => {
    if (key >= '0' && key <= '9') {
      if (waitingForValue) {
        setDisplay(key);
        setWaitingForValue(false);
      } else {
        setDisplay(display === '0' ? key : display + key);
      }
    } else if (key === '.') {
      if (waitingForValue) {
        setDisplay('0.');
        setWaitingForValue(false);
      } else if (!display.includes('.')) {
        setDisplay(display + '.');
      }
    } else if (key === 'C') {
      setDisplay('0');
      setExpression('');
      setPreviousValue(null);
      setOperation(null);
      setWaitingForValue(false);
    } else if (key === '±') {
      setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display);
    } else if (key === '%') {
      setDisplay((parseFloat(display) / 100).toString());
    } else if (['÷', '×', '−', '+'].includes(key)) {
      const currentValue = parseFloat(display);
      
      if (previousValue !== null && operation && !waitingForValue) {
        const result = calculate(previousValue, currentValue, operation);
        setDisplay(result.toString());
        setPreviousValue(result);
      } else {
        setPreviousValue(currentValue);
      }
      
      setOperation(key);
      setExpression(`${display} ${key}`);
      setWaitingForValue(true);
    } else if (key === '=') {
      if (previousValue !== null && operation) {
        const currentValue = parseFloat(display);
        const result = calculate(previousValue, currentValue, operation);
        setDisplay(result.toString());
        setExpression(`${previousValue} ${operation} ${currentValue} =`);
        setPreviousValue(null);
        setOperation(null);
        setWaitingForValue(true);
      }
    }
  };

  const calculate = (prev:number, current:number, op:string) => {
    switch (op) {
      case '+':
        return prev + current;
      case '−':
        return prev - current;
      case '×':
        return prev * current;
      case '÷':
        return current !== 0 ? prev / current : 0;
      default:
        return current;
    }
  };

  return (
    <>
      <Header/>
      <div className="max-w-sm mx-auto mt-8 shadow-2xl rounded-lg overflow-hidden">
        <Results display={display} expression={expression} />
        <Keys onKeyPress={handleKeyPress} />
      </div>
    </>
  );
}

export default App;
