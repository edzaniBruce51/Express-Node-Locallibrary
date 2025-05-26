const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true }, // reference to the associated book
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],    // enum: define a set of allowed values for a field
    default: "Maintenance",    // Sets the default value of the status field to Maintenance if no value is provided.
  },
  due_back: { type: Date, default: Date.now },
});

// Virtual for bookinstance's URL
BookInstanceSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the "this" object
  return `/catalog/bookinstance/${this._id}`;
});

//fromJSDate() to import a JavaScript date string and toLocaleString() to output the date in DATE_MED format in English: Apr 10th, 2023.
BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

BookInstanceSchema.virtual("due_back_yyyy_mm_dd").get(function () {
  return DateTime.fromJSDate(this.due_back).toISODate(); // format 'YYYY-MM-DD'
});


// Export model
module.exports = mongoose.model("BookInstance", BookInstanceSchema);
