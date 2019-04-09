'use strict';

import { Model, DataTypes } from 'sequelize'
import sequelize from './db'

module.exports = sequelize.define('img', {        
        Id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        ImgUrl: DataTypes.STRING,
        ImgType: DataTypes.INTEGER,
        ImgSize: DataTypes.INTEGER,
        ImgWidth: DataTypes.INTEGER,
        ImgHeight: DataTypes.INTEGER,
        ImgHash: DataTypes.STRING,
        Source: DataTypes.INTEGER,
        CreateTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        LastModifyTime: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    }, {
        timestamps: false,
        tableName: 'img',
        sequelize
    }
)


// (sequelize, DataTypes) => {
//     class Img extends Model {}

//     Img.init({        
//         Id: {
//             type: DataTypes.BIGINT,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         ImgUrl: DataTypes.STRING,
//         ImgType: DataTypes.INTEGER,
//         ImgSize: DataTypes.INTEGER,
//         ImgWidth: DataTypes.INTEGER,
//         ImgHeight: DataTypes.INTEGER,
//         ImgHash: DataTypes.STRING,
//         Source: DataTypes.INTEGER,
//         CreateTime: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//         },
//         LastModifyTime: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//         }
//     }, {
//         timestamps: false,
//         tableName: 'img',
//         sequelize
//     })

//     return Img
// }
