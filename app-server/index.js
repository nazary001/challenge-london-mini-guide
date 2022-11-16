import express from 'express';
import cors from 'cors';
import harrow from './data/Harrow.json' assert {type: 'json'};
import heathrow from './data/Heathrow.json' assert {type: 'json'};
import stratford from './data/Stratford.json' assert {type: 'json'};

const server = express();

server.use(express.json());
server.use(cors());

server.get('/:city/:category', (req, res) => {
    const reqCity = req.params.city;
    const reqCategory = req.params.category;
    if(reqCity === 'Harrow'){
        switch(reqCategory){
            case 'pharmacies':
                res.status(200).send(harrow.pharmacies);
                break;
            case 'colleges':
                res.status(200).send(harrow.colleges);
                break;
            case 'hospitals':
                res.status(200).send(harrow.hospitals);
                break;
            case 'doctors':
                res.status(200).send(harrow.doctors);
        }
    }
    else if(reqCity === 'Heathrow'){
        switch(reqCategory){
            case 'pharmacies':
                res.status(200).send(heathrow.pharmacies);
                break;
            case 'colleges':
                res.status(200).send(heathrow.colleges);
                break;
            case 'hospitals':
                res.status(200).send(heathrow.hospitals);
                break;
            case 'doctors':
                res.status(200).send(heathrow.doctors);
        }
    }
    else if(reqCity === 'Stratford'){
        switch(reqCategory){
            case 'pharmacies':
                res.status(200).send(stratford.pharmacies);
                break;
            case 'colleges':
                res.status(200).send(stratford.colleges);
                break;
            case 'hospitals':
                res.status(200).send(stratford.hospitals);
                break;
            case 'doctors':
                res.status(200).send(stratford.doctors);
        }
    }
    else{
        res.status(404).send('bad req')
    }
})

server.listen(4000, function() {
    console.log(`Server is running on port ${this.address().port}`);
});