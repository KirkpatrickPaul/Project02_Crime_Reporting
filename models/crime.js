module.export = function(sequelize, DataTypes) {
  const Crime = sequelize.define('Crime', {
    user: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Crime.associate = function(models) {
    Crime.belongsto(models.User, {
      foreignkey: {
        allowNull: false,
      },
    });
  };
  return Crime;
};
