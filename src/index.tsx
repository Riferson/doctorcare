import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    consulta: Model,
  },

  seeds(server) {
    server.db.loadData({
      consulta: [
        {
          id: 1,
          nome: "josefina",
          email: "josefina@123.com",
          telefone: "62912348765",
          especialidade: "geral",
          data: "12/05/2022",
        },
        {
          id: 2,
          nome: "josefina",
          email: "josefina@123.com",
          telefone: "62912348765",
          especialidade: "geral",
          data: "12/05/2022",
        },
        {
          id: 3,
          nome: "josefina",
          email: "josefina@123.com",
          telefone: "62912348765",
          especialidade: "geral",
          data: "12/05/2022",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";
    this.get("/consultas", () => {
      return this.schema.all("consulta");
    });

    this.post("/consultas", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("consulta", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
