import React, { useEffect } from 'react'
import styles from "../../styles/path.module.css"
import Link from "next/link";
import { useRouter } from 'next/router'
import roadmapMaterials from './roamdmapMaterials';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Path () {
    const router = useRouter();
    const param  = router.query
    const [chosenRoadmapState, setChosenRoadmapState] = React.useState("")
    const [headerState, setHeaderState] = React.useState("")

    useEffect(() => {
        if (param.roadmap) {
            setChosenRoadmapState(param.roadmap.split(" ").join("").toLowerCase().replace(".", ""))
            setHeaderState(param.roadmap[0].toUpperCase() + param.roadmap.slice(1))
        }
    }, [param.roadmap])

    return (
        <main className={styles.mainContainer}>
            <h1>{headerState} Roadmap</h1>
            <p>This Roadmap will turn you into a hireable developer, and teach you how to nail the job interview. It contains over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.</p>
            <div className={styles.AccordionContainer}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={styles.red}>Beginner</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].beginner.map(step => {
                            return (
                                <Link href={`${step[1]}`}><p>{step[0]}</p></Link>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Intermediate</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].beginner.map(step => {
                            return (
                                <Link href={`${step[1]}`}><p>{step[0]}</p></Link>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Advanced</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].intermediate.map(step => {
                                return (
                                    <Link href={`${step[1]}`}><p>{step}</p></Link>
                                )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{header} Career Path</AccordionTrigger>
                    <AccordionContent>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Beginner</AccordionTrigger>
                                <AccordionContent>
                                    <Link href ="https://www.w3schools.com/html/html_intro.asp">W3Schools: Learn HTML</Link>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Intermediate</AccordionTrigger>
                                <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Advanced</AccordionTrigger>
                                <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </AccordionContent>
                </AccordionItem>
            </Accordion> */}
            </div>
        </main>
    )
}