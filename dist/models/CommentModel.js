"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (sequelize, Datatypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        comment: {
            type: Datatypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'comments'
    });
    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: {
                allowNull: false,
                field: 'post',
                name: 'post'
            }
        });
        Comment.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                field: 'user',
                name: 'user'
            }
        });
    };
    return Comment;
};
