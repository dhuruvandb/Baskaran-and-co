const crudOperations = {
  count: async (Model, filter = {}) => {
    return await Model.countDocuments(filter);
  },
  distinct: async (Model, field, filter = {}) => {
    return await Model.distinct(field, filter);
  },
  aggregate: async (Model, pipeline) => {
    return await Model.aggregate(pipeline);
  },
  insertMany: async (Model, docs) => {
    return await Model.insertMany(docs);
  },
  insertOne: async (Model, doc) => {
    return await Model.create(doc);
  },
  updateMany: async (Model, filter = {}, update) => {
    return await Model.updateMany(filter, update);
  },
  updateOne: async (Model, filter = {}, update) => {
    return await Model.updateOne(filter, update);
  },
  replaceOne: async (Model, filter = {}, replacement) => {
    return await Model.replaceOne(filter, replacement);
  },
  deleteMany: async (Model, filter = {}) => {
    return await Model.deleteMany(filter);
  },
  deleteOne: async (Model, filter = {}) => {
    return await Model.deleteOne(filter);
  },
  find: async (Model, filter = {}, fields = {}, populate) => {
    return await Model.find(filter, fields).populate(populate);
  },
  findOne: async (Model, filter = {}, fields = {}, populate) => {
    return await Model.find(filter, fields).populate(populate);
  },
  findById: async (Model, id) => {
    return await Model.findById(id);
  },
  findOneAndDelete: async (Model, filter = {}) => {
    return await Model.findOneAndDelete(filter).exec();
  },
  findOneAndReplace: async (Model, filter = {}, replacement) => {
    return await Model.findOneAndReplace(filter, replacement).exec();
  },
  findOneAndUpdate: async (Model, filter = {}, update) => {
    return await Model.findOneAndUpdate(filter, update, { new: true }).exec();
  },
};

module.exports = crudOperations;
