'use strict';

import { Model, DataTypes } from 'sequelize'
import sequelize from './db'

module.exports = sequelize.define('roomimg', {
        Id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        PrimaryKey: DataTypes.INTEGER,
        RoomId: DataTypes.INTEGER,
        DocId: DataTypes.INTEGER,
        PageId: DataTypes.INTEGER,
        IsComplete: DataTypes.INTEGER,
        IsThumbnail: DataTypes.INTEGER,        
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
        tableName: 'roomimg',
        sequelize
    }
)