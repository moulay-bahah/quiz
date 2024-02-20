import {Button} from "@/components/ui/button"
import Meni from "@/components/meni";


export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center">
      <p className="max-w-screen-xl mx-auto p-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolor beatae qui provident odit non vel officiis eveniet, minima temporibus repellat voluptas earum. Aut iste quos eum, cupiditate reprehenderit aliquid.
      </p>
      <div className="max-w-screen-xl mx-auto p-4 w-full">
        <Meni />
      </div>
    </main>
  );
}
