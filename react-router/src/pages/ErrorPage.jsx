import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (error?.status) {
    switch (error.status) {
      case 404:
        return <div>Cette page n'existe pas !</div>;
      case 401:
        return <div>Vous n'êtes pas autorisé à voir cette page.</div>;
      case 503:
        return <div>Le service ne fonctionne pas. Contactez-nous !</div>;
      default:
        return (
          <div>
            Erreur {error.status}: {error.statusText || "Erreur inconnue."}
          </div>
        );
    }
  }

  return <div>Une erreur inattendue s'est produite.</div>;
};

export default ErrorPage;
