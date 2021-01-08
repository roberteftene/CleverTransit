
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transport_line', {
        'lineName': DataTypes.STRING,
        'route':DataTypes.STRING,
        'lineDescription':DataTypes.STRING,
        'transportMethodId':DataTypes.INTEGER
    }, {
        underscored: true,
    });
}
