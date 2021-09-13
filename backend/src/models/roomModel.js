module.exports = (sequelize, DataTypes) => {
    const rooms = sequelize.define('rooms', {

        ownerId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        code: DataTypes.STRING,
 
    }, {});
  
    rooms.associate = (models) => {
        rooms.belongsTo(models.users, {foreignKey:'ownerId'} );
        rooms.hasMany(models.characters );
        rooms.hasMany(models.players );
    }

    return rooms;
};