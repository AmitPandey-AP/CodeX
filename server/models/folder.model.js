import mongoose from 'mongoose'
const nodeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ['file', 'folder'], required: true },
    content: { type: String }, // Only for files
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Node', default: null },
    roomId: { type: String, required: true },
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Node' }] // Optional
  });

  const Node = mongoose.models.Node || mongoose.model('Node',nodeSchema);
  export default Node;