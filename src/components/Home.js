import React from "react";
import { useState } from "react";

const Home = () => {
  const [result, setResult] = useState("");
  const [method, setMethod] = useState(false);
  const [val, setVal] = useState("");
  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);

  const methodChanger = (event) => {
    const value = event.target.value
    setMethod(true);
    setVal(value)
  };
  const valueChanger = (event) => {
    const value = parseInt(event.target.value);
    if (method === false) {
      setArr1([...arr1, value]);
    } else {
      setArr2([...arr2, value]);
    }
  };
const Power2 = ()=>{ 
    let num1 = Number(arr1.join(''));
    let result = num1 ** 2
    setResult(result)
}
const Power3 = ()=>{
    let num1 = Number(arr1.join(''));
    let result = num1 ** 3
    setResult(result)
}

  const showResult = () => {
        let num1 = Number(arr1.join(''));
        let num2 = Number(arr2.join(''));

    if(val==="+"){
        let result = num1 + num2;
        setResult(result)
    }
    if(val==="-"){
        let result = num1 - num2;
        setResult(result)
    }
    if(val==="*"){
        let result = num1 * num2;
        setResult(result)
    }
    if(val==="/"){
        let result = num1 / num2;
        setResult(result)
    }

  };

  const allClear = () => {
    setMethod(false);
    setArr1([]);
    setArr2([]);
    setVal('');
    setResult('')
  };
  const decimal = '.';
  return (
    <div className="text-lg mx-auto mt-20 flex flex-wrap flex-col w-11/12 md:w-3/5 h-5/6 border border-black bg-gray-700 rounded-md">
    {/* <div className="text-xs text-yellow-400"> This app is developed by Abhishek kumar</div> */}
      <div className="w-full px-2 h-2/4 text-end flex flex-wrap flex-col pb-10 text-xl" id="display"> 
        <div>{arr1}</div> <div>{val}</div> <div>{arr2}</div>
       <div className="mt-4">{result}</div></div>


      <div className="flex flex-row flex-wrap h-2/4 mb-0">
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={1}
          id="one"
        >
          1
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={2}
          id="two"
        >
          2
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={3}
          id="three"
        >
          3
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={4}
          id="four"
        >
          4
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={5}
          id="five"
        >
          5
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={6}
          id="six"
        >
          6
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={7}
          id="seven"
        >
          7
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={valueChanger}
          value={8}
          id="eight"
        >
          8
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          value={9}
          onClick={valueChanger}
          id="nine"
        >
          9
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          value={0}
          onClick={valueChanger}
          id="zero"
        >
          0
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={methodChanger}
          value={'+'}
          id="add"
        >
          +
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={methodChanger}
          value={'-'}
          id="subtrack"
        >
          -
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={methodChanger}
          value={'*'}
          id="multiply"
        >
          *
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={methodChanger}
          value={'/'}
          id="divide"
        >
          /
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black"
          onClick={Power2}
          value={''}
        >
          a<sup>2</sup>
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black rounded-md"
          onClick={Power3}
          value={''}
        >
          a<sup>3</sup>
        </button>
        <button className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black rounded-md" 
        onClick={allClear}
        id="clear"
        >
          All Clear
        </button>
        <button
          className="bg-orange-500 text-black px-3 py-2 w-1/3 border border-black rounded-md"
          onClick={showResult}
          id="equals"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Home;
