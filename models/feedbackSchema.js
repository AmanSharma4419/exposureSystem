// Requiring The Mongoose
const mongoose = require('mongoose');
// Extracting The Schema
const Schema = mongoose.Schema;

// Making The Submission Schema
const submissionSchema = new Schema(
	{
		contentSummary: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

// Making The Model Of The Schema
const Submission = mongoose.model('Submission', submissionSchema);

// Exporting The Schema
module.exports = Submission;