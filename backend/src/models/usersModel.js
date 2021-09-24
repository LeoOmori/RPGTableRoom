module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {

      name:  DataTypes.STRING,
      email: DataTypes.STRING,
      avatar: DataTypes.STRING,
      password: DataTypes.STRING,

    }, {});

    users.associate = (models) => {

      users.hasMany(models.rooms,{foreignKey:'ownerId'});
      users.hasMany(models.players)
      users.hasMany(models.characters,{foreignKey:'ownerId'});

    }
  
    return users;
};