import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

function App() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Todo List</h1>
        </header>

        <div className="space-y-4 sm:space-y-6">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </main>
  );
}

export default App;
