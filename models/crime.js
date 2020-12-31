module.exports = function(sequelize, DataTypes) {
  const Crime = sequelize.define('Crime', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
      validate: {
        max: 180,
        min: 0
      }
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
      validate: {
        max: 90,
        min: -90
      }
    }
  });
  Crime.associate = function(models) {
    Crime.belongsTo(models.User, {
      foreignkey: {
        allowNull: false
      }
    });
  };
  return Crime;
};
