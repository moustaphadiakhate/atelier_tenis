import mongoose from 'mongoose';

/**
 * CallbackData Schema
 */
const CallbackDataSchema = new mongoose.Schema({
  data: {
    type: Object,
  },
  date: {
    type: Date,
  },
});

export default mongoose.model('CallbackData', CallbackDataSchema);
