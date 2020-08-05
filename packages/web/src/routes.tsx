import React from 'react'

import { Landing } from './pages/Landing'
import { TeacherForm } from './pages/TeacherForm'
import { TeacherList } from './pages/TeacherList'

import { BrowserRouter, Route } from 'react-router-dom'

export function Routes () {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Landing} />
      <Route path='/study' component={TeacherList} />
      <Route path='/give-classes' component={TeacherForm} />
    </BrowserRouter>
  )
}
