export function History({ logs, historyClicked }) {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {logs.map((_, i) => {
          return (
            <li key={i}>
              <button
                className={`btn-move ${i === logs.length - 1 ? "active" : ""}`}
                onClick={() => historyClicked(i)}
              >
                {i === 0 ? "Game Begins" : "Go to move " + i}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
