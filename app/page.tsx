'use client'
import {useContextExample, useContextExampleDispatch} from "@/components/store/example";
import {actionCreatorsExample} from "@/components/store/example/actionCreators";

export default function Home() {
  const contextExample=useContextExample()
  const contextExampleDispatch=useContextExampleDispatch()
  return (
      <div>
        <p>
          {contextExample.counter}
        </p>
        <button onClick={() => contextExampleDispatch(actionCreatorsExample.incrementCounter())}>
          increment counter
        </button>
        <button onClick={() => contextExampleDispatch(actionCreatorsExample.setCounter(6))}>
          increment counter = 6
        </button>
      </div>
  );
}
