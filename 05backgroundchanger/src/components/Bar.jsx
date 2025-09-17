import Button from "./Button";

function Bar({setColor}) {
  return (
    <div className="h-12 p-3 rounded-2xl gap-5 bg-gray-300 text-white flex items-center justify-center">
      {/* <h1 className="text-2xl font-bold">Background Changer</h1> */}
      <Button color="green" text="black" setColor={setColor}/>
      <Button color="red" text="black" setColor={setColor}/>
      <Button color="orange" text="black" setColor={setColor}/>
      <Button color="white" text="black" setColor={setColor}/>
      <Button color="yellow" text="black" setColor={setColor}/>
    </div>
  );
}

export default Bar;