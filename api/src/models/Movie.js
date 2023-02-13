const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Movie', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },

    apiId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false
    },

    imageVertical: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
    imageHorizontal: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    voteAverage: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    overview: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    productionCompanies: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    runtime: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    originalLanguage: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    genres:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },

    directors: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    video: {
        type: DataTypes.TEXT,
        allowNull: true,
    },

    classification:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  });
};