sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Fragment, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("zappsales.controller.View1", {
        onInit: function () {
            // Inicializa o modelo JSON local com total 0
        },

        onPress: function () {
            alert("Esse botão irá filtrar a tabela");
        },

        onPressFilter: function () { 

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
                    dialog.open();
                });
            } else {
                this._customerDialog.open();
            }
        },

        onCustomerSearch: function (event) {
            const searchValue = event.getParameter("value");

            const filters = [];

            if (searchValue) {
                filters.push(new Filter("Razao_Social", FilterOperator.Contains, searchValue));
            }

            const binding = event.getSource().getBinding("items");
            binding.filter(filters);
        },

        onCustomerSelect: function (event) {
            const selectedItem = event.getParameter("selectedItem");

            if (selectedItem) {
                const clienteNome = selectedItem.getTitle();
                this.byId("ClientInput").setValue(clienteNome);
                this.byId("selectedKeyIndicator").setText(clienteNome);
            }
        },

        onCustomerCancel: function () {
            if (this._customerDialog) {
                this._customerDialog.close();
            }
        },
        onValueHelpRequestVendor: function () {
            const view = this.getView();

            if (!this._vendorDialog) {
                Fragment.load({
                    id: view.getId(),
                    name: "zappsales.view.fragment.VendorValueHelp",
                    controller: this
                }).then(dialog => {
                    this._vendorDialog = dialog;
                    view.addDependent(dialog);
                    dialog.open();
                });
            } else {
                this._vendorDialog.open();
            }
        },

        onVendorSearch: function (event) {
            const searchValue = event.getParameter("value");

            const filters = [];

            if (searchValue) {
                filters.push(new Filter("Nome_Representante", FilterOperator.Contains, searchValue));
            }

            const binding = event.getSource().getBinding("items");
            binding.filter(filters);
        },

        onVendorSelect: function (event) {
            const selectedItem = event.getParameter("selectedItem");

            if (selectedItem) {
                const vendorNome = selectedItem.getTitle();
                this.byId("VendorInput").setValue(vendorNome);
                this.byId("selectedKeyIndicator").setText(vendorNome);
            }
        },

        onVendorCancel: function () {
            if (this._vendorDialog) {
                this._vendorDialog.close();
            }
        }
    });
});