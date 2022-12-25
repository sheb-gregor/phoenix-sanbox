defmodule MySandbox.Repo do
  use Ecto.Repo,
    otp_app: :my_sandbox,
    adapter: Ecto.Adapters.Postgres
end
