function status(request, response) {
  response.status(200).json({ texto: "O curso.dev é muito bom :)" });
}

export default status;
