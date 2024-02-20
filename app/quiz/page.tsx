import { Button } from "../../components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const data = [
  {
    id: 1,
    value: "-12",
    istrue: false,
  },
  {
    id: 2,
    value: "-3/5",
    istrue: true,
  },
  {
    id: 3,
    value: "5/3",
    istrue: false,
  }
]


export default function page() {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex items-center justify-between mb-10">
        <h1 className="bg-primary text-primary-foreground hover:bg-primary/90 py-4 px-8 rounded-md">Quiz</h1>
        <p>score : <span className="bg-primary text-primary-foreground hover:bg-primary/90 py-1 px-2 rounded-md">1</span></p>
      </div>
      <div className="text-center mb-8">
        <p>Niveau : <span>lycee / 1 ere anee </span></p>
        <p>chapitre : <span>equations</span></p>
      </div>
      <div>
        <div className="text-center flex flex-col gap-2 mb-8">
          <p>la solution de l&apos;equation 5x+3=0 est :</p>
          <div className="flex flex-col gap-2 m-auto">
            {data.map((item) => 
              <div key={item.id} className="basis-full" >
                <Button className="w-full">{item.value}</Button>
              </div>
            )}  
          </div>
        </div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  )
}
