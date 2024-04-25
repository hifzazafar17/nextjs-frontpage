import Image from "next/image";

export default function Navebar() {
  return (
    <div className="flex justify-between p-4">
      <div>
        Hotel
      </div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>

  );
}
