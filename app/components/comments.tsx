import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export default function Comments() {

    const tabValue = [
        {
            value:'Notes'
        },
        {
            value:'Comments'
        },
        {
            value:'IOS'
        }
    ]

    // the problem with this comments approach is that I would have to
    // create a new table on the DB for each comment section.
    
  return (
    <div className=''>
      <Tabs defaultValue='Notes' className='flex flex-col items-center'>
        <TabsList>
            {tabValue.map((tab, index) => (
                <TabsTrigger value={tab.value} key={index}>
                    {tab.value}
                </TabsTrigger>
            ))}
        </TabsList>
        {tabValue.map((tab, index) => (
            <TabsContent value={tab.value} key={index}>
               <Card className=''>
                     <CardHeader>
                          <CardTitle>
                            {tab.value}
                          </CardTitle>
                     </CardHeader>
                     <CardContent>
                          <CardDescription>
                            This is the {tab.value} section
                          </CardDescription>
                     </CardContent>
               </Card>
            </TabsContent>
        
        ))}
      </Tabs>
    </div>
  )
}
