import express from 'express'; //EsModule syntax
import * as diaryService from '../services/diaryServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.post('/', (req, res) => {
  const { date, weather, visibility, comment } = req.body
  
  const newDiaryEntry = diaryService.addDiary({
    date, 
    weather, 
    visibility, 
    comment})

  res.json(newDiaryEntry);
})

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(+req.params.id);

  return (diary !== null) ? res.send(diary) : res.sendStatus(404);
});


export default router;