import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Meni() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>lycee</AccordionTrigger>
        <AccordionContent>

          <Accordion type="single" collapsible className="w-full mx-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>1 er anee</AccordionTrigger>
              <AccordionContent>
                <ul>
                  <li className="border-b border-[214.3 31.8% 91.4%] p-4">equation</li>
                  <li className="border-b border-[214.3 31.8% 91.4%] p-4">fonction</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>2 eme anee</AccordionTrigger>
              <AccordionContent>
                dsfdgfd
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>3 eme anee</AccordionTrigger>
              <AccordionContent>
                dsfdgfd
              </AccordionContent>
            </AccordionItem>
          </Accordion>

        </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-2">
        <AccordionTrigger>college</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
