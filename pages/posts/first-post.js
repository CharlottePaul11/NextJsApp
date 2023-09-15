import { Html } from 'next/document';
import Link from 'next/link';
export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home page</Link>
      </h2>
      <div className='container'>
          <form>
              <input type="text"/>
          </form>
          <div className="keypad">
            <button>Clear</button>
            <button>C</button>
            <button>&divide;</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>&times;</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>&ndash;</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
          <style jsx global>{`
  body {
    display: flex;
    justify-content: center;
    align-items: center;
}
* {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
}
.container {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    width: 260px;
    text-align: center;
    border: 5px solid black;
    background: grey;
    border-radius: 5px;
}
.keypad {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: minmax(60px, auto)
}
`}
</style>
      </div>
    </>
  );
}