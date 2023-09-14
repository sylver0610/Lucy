'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DoctorInfo.belongsTo(models.User, { foreignKey: 'doctorId' })
    }
  }
  DoctorInfo.init({
    doctorId: DataTypes.INTEGER,
    priceId: DataTypes.STRING,
    paymentId: DataTypes.STRING,
    count: DataTypes.INTEGER,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'DoctorInfo',
  });
  return DoctorInfo;
};