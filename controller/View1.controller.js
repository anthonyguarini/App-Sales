sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("zappsales.controller.View1", {
        onInit: function () {
            // inicialização, se necessário
        },

        onPress: function () {
            alert("Esse botão irá filtrar a tabela");
        },

        onValueHelpRequest: function () {
            const view = this.getView();

            if (!this._customerDialog) {
                Fragment.load({
                    id: view.getId(),
                    name: "zappsales.view.fragment.CustomerValueHelp",
                    controller: this
                }).then(dialog => {
                    this._customerDialog = dialog;
                    view.addDependent(dialog);
                    this._customerDialog.open();
                });
            } else {
                this._customerDialog.open();
            }
        },

        onCustomerSearch: function (event) {
            const searchValue = event.getParameter("value");

            const filters = [];

            if (searchValue) {
                filters.push(new sap.ui.model.Filter("Razao_Social", sap.ui.model.FilterOperator.Contains, searchValue));
            }

            const binding = event.getSource().getBinding("items");
            binding.filter(filters);
        },

        onCustomerSelect: function (event) {
            const selectedItem = event.getParameter("selectedItem");

            if (selectedItem) {
                const clienteNome = selectedItem.getTitle(); // Razao_Social
                const clienteCodigo = selectedItem.getDescription(); // Cod_Cliente

                this.byId("ClientInput").setValue(clienteNome);
                this.byId("selectedKeyIndicator").setText(clienteNome);
            }
        },

        onCustomerCancel: function () {
            if (this._customerDialog) {
                this._customerDialog.close();
            }
        }
    });
});