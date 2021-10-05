'use strict';

const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class MVcables extends Model {};

    MVcables.init({
        writer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "The value for the writer cannot be null"
                },
                notEmpty: {
                    msg: 'Please provide a value for the writer it cannot be empty'
                }
            }
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "The value for the rating cannot be null"
                },
                notEmpty: {
                    msg: 'Please provide a value for the rating it cannot be empty'
                }
            }
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "The value for the subject cannot be null"
                },
                notEmpty: {
                    msg: 'Please provide a value for the subject it cannot be empty'
                }
            }
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "The value for message cannot be null"
                },
                notEmpty: {
                    msg: "Please provide a value for the message it cannot be empty"

                }
            }
        }
    }, { sequelize })

    return MVcables;
}