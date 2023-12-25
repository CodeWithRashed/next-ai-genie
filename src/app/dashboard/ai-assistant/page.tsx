const AiAssistant = () => {
  const bigData = false;
  return (
    <div>
      <div
        className={`result-container w-full h-[70vh] border-2 border-red-400 ${
          bigData && "overflow-y-scroll"
        } `}
      ></div>

      <div className="input-container">
        <input
          type="text"
          className="border-2 border-color-primary w-full min-h-50px mt-5"
        />
      </div>
    </div>
  );
};

export default AiAssistant;
