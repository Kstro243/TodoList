import React from "react";

function EmptySearch({searchValue}) {
    return(
        <p>No hay resultados de búsqueda para: {searchValue}</p>
    )
}

export { EmptySearch }