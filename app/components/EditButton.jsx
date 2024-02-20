import { redirect } from "next/navigation";
import Link from "next/link";

export default function EditButton({ id }) {
  return (
    <div className="pt-4">
      <Link
        className="bg-indigo-500 text-white px-4 py-2 rounded-md"
        href={`/edit/${id}`}
      >
        Edit
      </Link>
    </div>
  );
}
