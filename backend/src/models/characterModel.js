module.exports = (sequelize, DataTypes) => {
    const characters = sequelize.define('characters', {

        ownerId: DataTypes.INTEGER,
        roomId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        sheet: DataTypes.JSONB,
        isPublic: DataTypes.BOOLEAN,

 
    }, {});
  
    characters.associate = (models) => {
        characters.belongsTo(models.users, {foreignKey:'ownerId'} );
        characters.belongsTo(models.rooms, {foreignKey:'roomId'} );
    }

    return characters;
};