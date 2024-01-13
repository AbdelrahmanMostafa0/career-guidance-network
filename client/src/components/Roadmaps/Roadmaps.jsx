import React from 'react'
import Link from "next/link";
import styles from "../../styles/roadmap.module.css"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function Roadmaps () {
  return (
    <main className={styles.mainContainer}>
      <h1>Developer Roadmaps</h1>
      <div className={styles.roadmapsContainer}>
        <Link href="#" className={styles.roadmap}><div><p>Frontend</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Backend</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Full Stack</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>DevOps</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Android</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>ASP.NET Core</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Cyber Security</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Game DEveloper</p></div></Link>
        <Link href="#" className={styles.roadmap}><div><p>Ux Design</p></div></Link>
      </div>
    </main>
  )
}

