/*
    '/api/events'
 */

const { Router } = require('express');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events.controller');


const router = Router();

router.get('/', getEvents);

router.post('/', createEvent);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;