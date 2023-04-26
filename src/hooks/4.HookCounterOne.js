import React, {useEffect, useState} from 'react';

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `You clicked ${count} times`;
    document.title = `You clicked ${count} times`;
    // }); //렌더링 될때마다 실행
    // }, []); //맨처음 렌더링될때 한번만 실행
  }, [count]); //count값이 엡디이트 될때만 실행

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterOne;
