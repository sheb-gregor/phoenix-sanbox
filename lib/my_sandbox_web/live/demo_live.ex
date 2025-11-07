defmodule MySandboxWeb.DemoLive do
  use MySandboxWeb, :live_view
  require Logger

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_event("new_count", %{"count" => count}, socket) do
    Logger.debug("-> GOT NEW COUNT VALUE: #{count}")
    {:noreply, socket}
  end

  def handle_event("count_changed", _state, socket) do
    Logger.debug("-> COUNT CHANGED")
    {:noreply, socket}
  end

  def handle_event(event, _state, socket) do
    Logger.debug("-> GOT NEW EVENT: #{inspect(event)}")
    {:noreply, socket}
  end
end
