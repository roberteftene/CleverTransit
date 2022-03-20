module.exports = (sequelize, DataTypes) => {
    return sequelize.define('review', {
        'review_title': {
            type:DataTypes.STRING,
            allowNull:false,
            defaultValue: null
        },
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
        },
        'review_noLikes': {
            type:DataTypes.INTEGER,
            defaultValue: 0
        },
        'transportLineId': {
            type: DataTypes.INTEGER
        },
        'transportMethodId': {
            type:DataTypes.INTEGER,
            defaultValue:5
        },
        'userId': {
            type:DataTypes.INTEGER
        }
    }, {
        underscored: true,
        timestamps: false
    });
};