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
            <p className={styles.subTitle}>This Roadmap will turn you into a hireable developer, and teach you how to nail the job interview. It contains over 70 hours of top-notch tutorials, hundreds of coding challenges, and dozens of real-world projects.</p>
            <div className={styles.AccordionContainer}>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={styles.accordionTrigger}>Beginner</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].beginner.map(step => {
                            return (
                                <Link className={styles.link} href={`${step[1]}`}><p>{step[0]}</p></Link>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={styles.accordionTrigger}>Intermediate</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].beginner.map(step => {
                            return (
                                <Link className={styles.link} href={`${step[1]}`}><p>{step[0]}</p></Link>
                            )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className={styles.accordionTrigger}>Advanced</AccordionTrigger>
                    <AccordionContent>
                        {chosenRoadmapState && roadmapMaterials[chosenRoadmapState].intermediate.map(step => {
                                return (
                                    <Link className={styles.link} href={`${step[1]}`}><p>{step}</p></Link>
                                )
                        })}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </main>
    )
}