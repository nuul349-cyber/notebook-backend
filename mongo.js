const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://nuul_db_user:${password}@cluster0.3rlyjjy.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Sample Note 3',
//   important: false,
// })

// note.save().then(result => {
//   console.log(result)
//   mongoose.connection.close()
// })

Note.find({}).then(notes => {
  notes.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})