import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';


const Formula = ({ expression }) => {
  const formulaRef = React.useRef(null);

  React.useEffect(() => {
    katex.render(expression, formulaRef.current, {
      throwOnError: false
    });
  }, [expression]);

  return <span ref={formulaRef} className="katex-formula" ></span>;
};

export default Formula;