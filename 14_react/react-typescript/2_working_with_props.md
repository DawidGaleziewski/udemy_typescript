When working with TS in react wee need to describe the props we are using

We can use the fact that React.FC is a generic and we can describe the props used.

We can move the description of props itself to interface to make it cleaner

# 1 Passing props

```typescript
interface TodoListProps {
  items: { id: string; text: string }[];
}

// React.FC is a generic. We can pass the props it will use into <> (type React.FC<P = {}> = React.FunctionComponent<P>).
// This will not affect the default children prop
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
```

# 2 React events

When handling the events in react we have types on React object

```typescript
const toDoSubmitHandler = (event: React.FormEvent) => {
  event.preventDefault();
};
```

# 3 Working with refs of dom elements

useRef is a generic. We can pass to <> what type it will accept. In case of input element we just use HTMLInputElement

```Typescript
const textInputRef = useRef<HTMLInputElement>(null);
```
