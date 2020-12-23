module.exports = (sequelize, DataTypes) => {
    return sequelize.define('review', {
        'start_point': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'end_point': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'leaving_hour': {
            type: DataTypes.STRING,
            allowNull: false
        },
        'duration':{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        'congestion_level': {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        'observations': {
            type:DataTypes.STRING
        },
        'satisfaction_level': {
            type:DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        underscored: true,
        timestamps: false
    })
}