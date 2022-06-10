"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Gerals", {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hora: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      clientes: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contas_quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_falha_operadora: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_telefone_incorreto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_nao_atendida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_atendimento_maquina: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_atendimento_humano: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_abandono_pre_fila: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_abandono_fila: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      chamadas_atendimento_pa: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocorrencias_total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocorrencias_sem_contato: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocorrencias_com_contato: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocorrencias_abordagem: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ocorrencias_fechamento: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("Gerals");
  },
};
