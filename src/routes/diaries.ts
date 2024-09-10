import express from 'express'; //EsModule syntax
import * as diaryService from '../services/diaryServices';
import toNewDiaryEntry from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo());
});

router.post('/', (req, res) => {
  try{
    const newDiaryEntry = toNewDiaryEntry(req.body)      
    const addedEntry = diaryService.addDiary(newDiaryEntry);
    res.json(addedEntry);
  } catch (e) {
    if (e instanceof Error) {
      res.status(400).send(e.message);
    } else {
      res.status(400).send('Unknown error');
    }
  }
})

router.get("/:id", (req, res) => {
  const diary = diaryService.findById(+req.params.id);

  return (diary !== null) ? res.send(diary) : res.sendStatus(404);
});


export default router;