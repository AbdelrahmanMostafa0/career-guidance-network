import React from 'react'
import RoadmapsContainer from './RoadmapsContainer';
import Link from "next/link";
import styles from "../../styles/roadmap.module.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Roadmaps () {
  const QUERY_STRINGS = ["frontend", "backend", "full stack", "devops", "android", 
                        "ASP.NET Core", "cyber Security", "game developer", "ux design", "react native" ]
  
  return (
    <RoadmapsContainer className={styles.mainContainer}>
      <h1>Developer Roadmaps</h1>
      <div className={styles.roadmapsContainer}>
        {QUERY_STRINGS.map(query => {
          const captalizedQuery = query[0].toUpperCase() + query.slice(1)
          return (
            <Link href={`roadmaps/path?roadmap=${query}`} className={styles.roadmap}><p>{captalizedQuery}</p></Link>
          )
        })}
      </div>
    </RoadmapsContainer>
  )
}

