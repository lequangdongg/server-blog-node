const mongoose = require('mongoose')
const Schema = mongoose.Schema


const PostSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	image: {
		type: String
	},
  content: {
    type: String
  },
  view: {
    type: Number
  },
  type: {
    type: String
  },
  role: {
    type: String,
    enum: ['ADMIN', 'USER'],
    default: 'ADMIN'
  },
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	}
})

module.exports = mongoose.model('posts', PostSchema)