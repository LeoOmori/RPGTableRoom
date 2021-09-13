module.exports = (sequelize, DataTypes) => {
    const players = sequelize.define('players', {

        userId: DataTypes.INTEGER,
        roomId: DataTypes.INTEGER,

    }, {});
  
    players.associate = (models) => {
        players.belongsTo(models.users, {foreignKey:'userId'} );
        players.belongsTo(models.rooms, {foreignKey:'roomId'} );
    }

    return players;
};