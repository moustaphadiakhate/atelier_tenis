import mongoose from 'mongoose';

/**
 * Player Schema
 */
const PlayerSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  shortname: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  country: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

export default mongoose.model('Player', PlayerSchema);
// TODO: Try to separate Country and Data object like player_details from player
