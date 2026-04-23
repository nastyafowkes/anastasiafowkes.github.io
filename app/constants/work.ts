import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
     year: '2022',
    title: 'Web Design',
    subtitle: 'Personal Portfolio',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2023',
    title: 'Backroads Foundation',
    subtitle: 'Data Analyst Intern and English-Ukrainian Translator',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2024',
    title: 'Web Designer',
    subtitle: 'Self-employed as an Intern and English Teacher',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: 'started  in 2026',
    title: 'BYU–Idaho',
    subtitle: 'B.A. Information Technology',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
     year: '2026',
    title: 'Fiverr&Companion',
    subtitle: 'Web Design & Development & Data Analyst',
    position: 'right',
  }
]
