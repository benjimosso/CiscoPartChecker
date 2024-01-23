
export default  function SingleItem({ single }) {
    console.log(single)
  return (
    <div className="p-10">
        {single.CiscoPN && (
            <div className="flex justify-evenly">
            <h1 className="font-bold">Part Number: </h1>
            <p>{single.CiscoPN}</p>
            </div>
        )}

        <h2>{single.Description}</h2>
        <h2 className="font-bold">Blank: {single.hola}</h2>


    </div>
  )
}
