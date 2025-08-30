import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
const dayOfWeek = new Date().getDay()
console.log('day of week', dayOfWeek);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    let day = '';
    let whatToDo = '';
    if ([1,2,3,4,5].includes(dayOfWeek)){
        day = 'a weekday';
        whatToDo = 'work hard';
    } else {
        day = 'the weekend';
        whatToDo = 'have fun';
    }
    res.render('index.ejs', 
        {
            day : day,
            whatToDo : whatToDo
        }
    );
})