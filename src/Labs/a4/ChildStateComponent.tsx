function ChildStateComponent({ counter, setCounter }:
  {
    counter: number;
    setCounter: (counter: number) => void;
  }) {
  return (
    <div>
      <h3>Child Component</h3>
      <h4>Counter: {counter}</h4>
      <button className="btn btn-success me-1"
        onClick={() => setCounter(counter + 1)}>
        Increment
      </button >
      <button className="btn btn-danger"
        onClick={() => setCounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
export default ChildStateComponent;