export const checkStudentDatamiddleware = (schema) => {
  return (req, res, next) => {
    const { permission, user_id } = req.body;
    const { error } = schema.validate({ permission, user_id });
    if (error) {
      res.status(400).send("Ma'lumot to'liqmas");
    } else {
      next();
    }
  };
};


export const UpdateStudentDatamiddleware = (schema) => {
    return (req, res, next) => {
        const {id}=req.params
      const { permission, user_id } = req.body;
      const { error } = schema.validate({ permission,id, user_id });
      if (error) {
        res.status(400).send("Ma'lumot to'liqmas");
      } else {
        next();
      }
    };
  };
  