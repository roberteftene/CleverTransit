module.exports = (sequelize, DataTypes) => {
    return sequelize.define('transport_method', {
        'name': DataTypes.STRING
    }, {
        underscored: true,
    });
};
