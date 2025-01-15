const Access_tokens = require("./access_tokens.model");
    const errorHandler = require("../../utils/errorHandler");
      
module.exports.create = async(req, res) => {
  try {
    const item = new Access_tokens(req.body);

    const result = await item.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error("Access_tokens creation failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: 'Access_tokens'})
  }
};
    
      
module.exports.getAll = async(req, res) => {
  try {
    let query = req.query || {};
    const result = await Access_tokens.find(query);

    return res.status(200).json(result);
  } catch (err) {
    console.error("Access_tokens getAll failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: 'Access_tokens'})
  }
};

module.exports.getById = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await Access_tokens.findById(id);

    return res.status(200).json(result);
  } catch (err) {
    console.error("Access_tokens getById failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: 'Access_tokens'})
  }
};
    
      
module.exports.getList = async(req, res) => {
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
        }
      }

      const result = await Access_tokens.paginate({}, options);
      return res.status(200).json(result);
    } catch (err) {
      console.error("Access_tokens list failed: " + err);
      const { status, message } = errorHandler(err)
      res.status(status).json({message, entity: 'Access_tokens'})
    }
};
    
      
module.exports.update = async(req, res) => {
  try {
    const { id } = req.params;
    const result = await Access_tokens.findOneAndUpdate({ _id: id}, req.body, { new: true });

    return res.status(200).json(result);
  } catch (err) {
    console.error("Access_tokens update failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: 'Access_tokens'})
  }
};
    
      
module.exports.remove = async(req, res) => {
  try {
    const { id } = req.params;

    const result = await Access_tokens.deleteOne({ _id: id});
    return res.status(200).json(result);
  } catch (err) {
    console.error("Access_tokens delete failed: " + err);
    const { status, message } = errorHandler(err)
    res.status(status).json({message, entity: 'Access_tokens'})
  }
};
    
      