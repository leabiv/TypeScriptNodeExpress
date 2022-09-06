import express from 'express'
import * as diaryServices from '../services/diaryServices'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id))

  return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    // console.log(req.body)
    const newDiaryEntry = toNewDiaryEntry(req.body)
    // console.log('newDiaryEntry', newDiaryEntry)
    const addDiaryEntry = diaryServices.addDiary(newDiaryEntry)
    // console.log('addDiaryEntry', addDiaryEntry)

    res.json(addDiaryEntry)
  } catch (e) {
    res.status(404).send(e)
  }
})

export default router
