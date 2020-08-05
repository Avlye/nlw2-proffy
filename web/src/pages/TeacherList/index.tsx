import React, { useState } from 'react'

import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import { api } from '../../services/api'

// eslint-disable-next-line no-unused-vars
import { Teacher, TeacherItem } from '../../components/TeacherItem'

import './styles.scss'

export function TeacherList () {
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const [teachers, setTeachers] = useState([])

  async function searchTeachers (e: React.FormEvent) {
    e.preventDefault()

    if (!(subject === '') && !(weekDay === '') && !(time === '')) {
      const response = await api.get('classes', {
        params: {
          subject,
          week_day: weekDay,
          time
        }
      })

      console.log(response.data)

      setTeachers(response.data)
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onChange={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' }
            ]} />

          <Select
            name="week_day"
            label="Dia da Semana"
            value={weekDay}
            onChange={e => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda' },
              { value: '2', label: 'Terça' },
              { value: '3', label: 'Quarta' },
              { value: '4', label: 'Quinta' },
              { value: '5', label: 'Sexta' },
              { value: '6', label: 'Sábado' }
            ]} />

          <Input
            type="time" name="time" label="Hora"
            value={time}
            onChange={e => {
              setTime(e.target.value)
            }}
          />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  )
}
