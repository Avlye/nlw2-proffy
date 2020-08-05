import React, { useState } from 'react'
import WarningIcon from '../../assets/images/icons/warning.svg'

import { Input } from '../../components/Input'
import { PageHeader } from '../../components/PageHeader'
import { Select } from '../../components/Select'
import { Textarea } from '../../components/Textarea'
import { api } from '../../services/api'
import { useHistory } from 'react-router-dom'

import './styles.scss'

export function TeacherForm () {
  const history = useHistory()

  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [bio, setBio] = useState('')

  const [subject, setSubject] = useState('')
  const [cost, setCost] = useState('')

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' }
  ])

  function addNewScheduleItem () {
    setScheduleItems([...scheduleItems, {
      week_day: 0,
      from: '',
      to: ''
    }])
  }

  function handleCreateClass (e: React.FormEvent) {
    e.preventDefault()

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      console.log('Cadastro realizado com sucesso')
      history.push('/')
    }).catch(() => {
      console.log('Erro no cadastro!')
    })
  }

  function setScheduleItemValue (position: number, field: string, value: string) {
    setScheduleItems(
      scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value }
        }

        return scheduleItem
      })
    )
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição." />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              name="name" label="Nome Completo"
              value={name} onChange={(e) => setName(e.target.value)}/>

            <Input
              name="avatar" label="Avatar (URL)"
              value={avatar} onChange={(e) => setAvatar(e.target.value)} />

            <Input
              name="whatsapp" label="WhatsApp"
              value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}/>

            <Textarea
              name="bio" label="Biografia"
              value={bio} onChange={(e) => setBio(e.target.value)} />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
            <Input
              name="cost" label="Custo da sua hora por aula"
              value={cost} onChange={e => setCost(e.target.value)}/>
          </fieldset>

          <fieldset>
            <legend>Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
            + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className="schedule-item">
                <Select
                  name="week_day"
                  label="Dia da Semana"
                  value={scheduleItem.week_day}
                  onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  name="from" label="Das" type="time"
                  value={scheduleItem.from}
                  onChange={e => setScheduleItemValue(index, 'from', e.target.value)} />

                <Input
                  name="to" label="Até" type="time"
                  value={scheduleItem.to}
                  onChange={e => setScheduleItemValue(index, 'to', e.target.value)}/>

                <br/>
              </div>
            ))}

          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso Importante"/>
            Importante! <br />
            Preencha todos os dados
            </p>

            <button type="submit">
              Salvar Cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}
