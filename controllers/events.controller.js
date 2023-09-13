const { response } = require('express')

const getEvents = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'get events - controller'
    });

}

const createEvent = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: 'create event - controller'
    });

}

const updateEvent = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'update event - controller'
    });

}

const deleteEvent = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'delete event - controller'
    });

}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}