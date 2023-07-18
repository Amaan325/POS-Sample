exports.deleteOne = (Model) =>
  async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, {
      isDeleted: true,
      isActive: false,
    });

    if (!doc) {
      return next(("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
};

exports.updateOne = (Model) =>
  async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
};

exports.createOne = (Model) =>
  async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
}

exports.getOne = (Model, popOptions) =>
  async (req, res, next) => {
    let query = Model.findById(req.params.id);
    const doc = await query;

    if (!doc) {
      return next(new AppError("No document found with that ID", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
}

exports.getAll = (Model, options) =>
  async (req, res, next) => {
    let filter = {
      isActive: true,
      isDeleted: false,
    };

    const query = Model.find(filter);
    if (options?.populate) query.populate(options.populate);
    const doc = await query;

    // SEND RESPONSE
    res.status(200).json({
      results: doc.length,
      data: {
        data: doc,
      },
    });
}