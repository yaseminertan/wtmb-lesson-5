const mongoose = require('mongoose')

const MeetupSchema = new mongoose.Schema({
    name: String,
    location: String,
    attendees: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Person'
    }]
})

//MeetupSchema.plugin(require('mongoose-autopopulate'))

const MeetupModel = mongoose.model('Meetup', MeetupSchema)

module.exports = MeetupModel