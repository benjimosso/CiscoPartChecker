import { redirect } from "next/navigation";


export default function EditButton({id}) {
    

    const handleSubmmit =  () => {
        console.log("I'm Clicking!")
        redirect('/login')
    }

  return (
    <div>
       <button 
       className="bg-indigo-500 text-white px-4 py-2 rounded-md"
       onClick={handleSubmmit}
       >
              Edit
            </button>
    </div>
  )
}
