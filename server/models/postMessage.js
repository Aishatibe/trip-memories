import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String] /* An array of strings */,
  selectedImage: String /* convert an image to strings using the base 64 */,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

//turn the model into a schema by the code below
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
