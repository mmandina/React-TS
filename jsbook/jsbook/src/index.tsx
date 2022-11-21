import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  const startService = async () => {
    try {
      await esbuild.initialize({
        worker: true,
        wasmURL: '/esbuild.wasm',
      });
    } catch (err) {}
    console.log(esbuild);
  };

  useEffect(() => {
    startService();
  }, []);
  const onClick = async () => {
    try {
      const res = await esbuild.transform(input, {
        loader: 'jsx',
        target: 'es2015',
      });

      setCode(res.code);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};
let root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
