import { useState } from "react";

type Obj = { len: boolean; upper: boolean; lower: boolean; digit: boolean; special: boolean };

export default function App() {
  const [check, setCheck] = useState<Obj>({
    len: false,
    upper: false,
    lower: false,
    digit: false,
    special: false,
  });
  const [inputV, setInputV] = useState("");
  const [show, setShow] = useState(false);

  function cheq(str: string) {
  
    const rules: [keyof Obj, RegExp][] = [
      ["len", /.{8,}/],
      ["upper", /[A-Z]/],
      ["lower", /[a-z]/],
      ["digit", /\d/],
      ["special", /[^a-zA-Z0-9]/],
    ];

    const newCheck: Obj = { len: false, upper: false, lower: false, digit: false, special: false };

    for (const [key, regex] of rules) {
      newCheck[key] = regex.test(str);
    }

    setCheck(newCheck);
  }

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <form className="p-12 space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="p-3 border"
            value={inputV}
            onChange={(e) => {
              setInputV(e.target.value);
              cheq(e.target.value);
            }}
          />
          <button
            type="button"
            className="absolute right-2 top-2 text-sm"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <label><input type="checkbox" readOnly checked={check.upper} /> Contains uppercase character</label>
          <label><input type="checkbox" readOnly checked={check.lower} /> Contains lowercase character</label>
          <label><input type="checkbox" readOnly checked={check.digit} /> Contains a digit</label>
          <label><input type="checkbox" readOnly checked={check.special} /> Contains a special character</label>
        </div>
      </form>
    </div>
  );
}
