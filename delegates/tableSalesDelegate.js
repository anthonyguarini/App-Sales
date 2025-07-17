sap.ui.define([
    "sap/ui/mdc/TableDelegate",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/mdc/odata/v2/TableDelegate" // importante
], function (TableDelegate, ODataModel, V2TableDelegate) {
    "use strict";

    const CustomDelegate = Object.assign({}, V2TableDelegate);

    CustomDelegate.fetchProperties = function (oTable) {
        return Promise.resolve([
            { name: "Cod_Pedido", label: "Pedido", dataType: "Edm.String" },
            { name: "Data_Pedido", label: "Data do Pedido", dataType: "Edm.DateTime" },
            { name: "NFe", label: "Nota Fiscal", dataType: "Edm.String" },
            { name: "Data_Faturamento", label: "Data do Faturamento", dataType: "Edm.DateTime" },
            { name: "Cod_Cliente", label: "Cliente", dataType: "Edm.String" },
            { name: "Cod_Representante", label: "Representante", dataType: "Edm.String" },
            { name: "Cod_Material", label: "Material", dataType: "Edm.String" },
            { name: "Qtde", label: "Quantidade", dataType: "Edm.Decimal" },
            { name: "Vlr_Produto", label: "Valor do Produto", dataType: "Edm.Decimal" },
            { name: "Status", label: "Status", dataType: "Edm.String" }
        ]);
    };

    CustomDelegate.fetchItems = function (oTable) {
        return this.fetchProperties(oTable);
    };

    return CustomDelegate;
});