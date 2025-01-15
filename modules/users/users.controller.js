const Users = require("./users.model");
const errorHandler = require("../../utils/errorHandler");

module.exports.create = async (req, res) => {
  try {
    const newUser = new Users({
      name: req.body.name,
      phone: req.body.phone,
      img_profile: req.body.img_profile,
      password: req.body.password, // La contraseña en texto plano
    });
    res.status(201).json(newUser);
  } catch (err) {
    if (err.code === 11000) { // Código para errores de duplicados
      return res.status(409).json({ message: "Duplicate entry", field: Object.keys(err.keyValue) });
    }
    console.error("Users creation failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
  }
};

module.exports.getAll = async (req, res) => {
  try {
    let query = req.query || {};
    const result = await Users.find(query);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Users getAll failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
  }
};

module.exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findById(id);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Users getById failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
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

    const result = await Users.paginate({}, options);
    return res.status(200).json(result);
  } catch (err) {
    console.error("Users list failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.findOneAndUpdate({ _id: id }, req.body, { new: true });
    return res.status(200).json(result);
  } catch (err) {
    console.error("Users update failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
  }
};

module.exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.deleteOne({ _id: id });
    return res.status(200).json(result);
  } catch (err) {
    console.error("Users delete failed: " + err);
    const { status, message } = errorHandler(err);
    res.status(status).json({ message, entity: 'Users' });
  }
};