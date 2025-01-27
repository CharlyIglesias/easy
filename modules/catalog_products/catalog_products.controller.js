const Catalog_products = require("./catalog_products.model");
const errorHandler = require("../../utils/errorHandler");

module.exports.create = async (req, res) => {
  try {
    const item = new Catalog_products(req.body);
    const result = await item.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products creation failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.batchCreate = async (req, res) => {
  try {
    const items = req.body;
    const result = await Catalog_products.insertMany(items);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products batch creation failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    let query = req.query || {};
    const result = await Catalog_products.find(query);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products getAll failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Catalog_products.findById(id);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products getById failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.getList = async (req, res) => {
  try {
    const { page = 1, limit = 20, sortField, sortOrder } = req.query;
    const options = {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort: {}
    };

    if (sortField && sortOrder) {
      options.sort = {
        [sortField]: sortOrder
      };
    }

    const result = await Catalog_products.paginate({}, options);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products list failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Catalog_products.findOneAndUpdate({ _id: id }, req.body, { new: true });
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products update failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.batchUpdate = async (req, res) => {
  try {
    const updates = req.body;
    const result = await Promise.all(
      updates.map(update => 
        Catalog_products.findOneAndUpdate({ _id: update.id }, update.data, { new: true })
      )
    );
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products batch update failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Catalog_products.deleteOne({ _id: id });
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products delete failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};

module.exports.batchRemove = async (req, res) => {
  try {
    const { ids } = req.body;
    const result = await Catalog_products.deleteMany({ _id: { $in: ids } });
    return res.status(200).json(result);
  } catch (err) {
    console.error("Catalog_products batch delete failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Catalog_products' });
  }
};