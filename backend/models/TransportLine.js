
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transport_line', {
        'lineName': DataTypes.STRING,
        'route':DataTypes.STRING,
        'lineDescription':DataTypes.TEXT,
        'transportMethodId':DataTypes.INTEGER
    }, {
        underscored: true,
    });
};
