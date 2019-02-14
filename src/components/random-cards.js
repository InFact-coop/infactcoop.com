import React from 'react'
import * as r from 'ramda'

import { WorkCard } from './work-card'

import workProjects from '../data/work-projects'

const shuffle = list => {
  let j, x, i
  for (i = list.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1))
    x = list[i]
    list[i] = list[j]
    list[j] = x
  }
  return list
}

const RandomCards = ({ location }) => {
  const [project1, project2] = shuffle(r.dissoc(location, workProjects))
  return (
    <div className="flex-ns flex-column flex-row-ns justify-between-ns">
      <WorkCard {...project1} />
      <WorkCard {...project2} />
    </div>
  )
}

export default RandomCards
