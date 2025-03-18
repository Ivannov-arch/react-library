// click event = An interaction when a user clicks on
  //             We can respond to clicks by passing
  //             a callback to the onClick event handler


function ClickEvent() {

    let count = 0;
    const handleClick = (name) => {
      if(count < 3) {
        count++;
        console.log(`${name} you clicked me ${count} times`)
      }
      else {
        console.log(`${name} stop clicking me`)
      }
    }

    const handleClick2 = (e) => {console.log(e)
                                e.target.textContent = `OUCH!`
    }

    return(
    <>
      <button onClick={() => handleClick("Bro")}>Click Me😃</button>
      <button onDoubleClick={(e) => handleClick2(e)}>Click event</button>
    </>
    )

    //<button onClick={handleClick}>Click Me😃</button>
    //<button onDoubleClick={handleClick}>Click Me😃</button>
}

export default ClickEvent