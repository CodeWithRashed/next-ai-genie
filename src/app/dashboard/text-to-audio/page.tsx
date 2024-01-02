
const TextToAudio = () => {
  const bigData = false;
  return (
    <div>
    <div
      className={`result-container w-full h-[70vh] ${
        bigData && "overflow-y-scroll"
      } `}
    ></div>

    <form className="input-container h-16 relative">
      <input
        type="text"
        className="h-10 bg-grey-bg rounded-main px-3 outline-none focus:border-color-primary  border border-color-primary focus:border-2 w-full  mt-5"
      />
      <button type="submit" className="absolute right-1 hover:bg-color-primary-dark rounded-main bottom-2 text-white bg-color-primary px-3 py-1">Submit</button>
    </form>
  </div>
  )
  }
  
  export default TextToAudio
  