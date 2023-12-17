import mongoose, { Schema } from 'mongoose'

const coutnerId = new Schema({
    // Your other schema fields...
    id: { type: Number, required: true },
});

userSchema.plugin(autoIncrement.plugin, {
    model: 'UserCounter', // Name of the counter document model
    field: 'id',
    incrementBy: 1, // Increment value (defaults to 1)
    startAt: 1, // Starting value for sequence (defaults to 1)
});

const CoutnerId = mongoose.models.Index || mongoose.model("Index", coutnerId);
export default CoutnerId

