defmodule MySandboxWeb.PageController do
  use MySandboxWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
