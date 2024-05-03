// shadcn components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {

  
  
  return (
    <main className="flex-1 ">
      <div className=" mt-28 ">
        <br />
        <div className="flex flex-col gap-10 justify-center items-center">
          <h1 className="text-pretty text-2xl font-bold">
           Cisco Part Checker V.1
          </h1>
          <Accordion type="single" collapsible className=" w-[400px] p-4">
              <AccordionItem value="item-1" >
                <AccordionTrigger className="font-mono">How this Website Works?</AccordionTrigger>
                <AccordionContent>
                  <p>
                  Very simple, just type in the part number you want to check and click one of the results.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-mono">Is it 100% accurate?</AccordionTrigger>
                <AccordionContent>
                  Well... no, it is not 100% accurate, but it is a good start.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-mono">Do I need to Log In?</AccordionTrigger>
                <AccordionContent>
                  No you do not need to log in to use this website. But, I really recomend it to get the best experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-mono">Contact!</AccordionTrigger>
                <AccordionContent>
                 Please contact me at: <a className="font-mono" href="mailto:dmosso@dhd.com" >dmosso@dhd.com</a> for any suggestions or issues.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          
        </div>
       
        
         
      </div>
    </main>
  );
}
